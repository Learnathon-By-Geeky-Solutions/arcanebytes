import json  # noqa
from django.utils import timezone
from django.db.models import Q
from rest_framework import serializers
from apps.kaizen.models import Task, SubTask, Reflection


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            "title",
            "details",
            "due_date",
            "completed",
            "completed_time",
            "is_all_day",
            "reminders",
            "repeat_flag",
            "is_highlight",
        )

    def validate(self, attrs):
        if attrs.get("completed", False) and not attrs.get("completed_time"):
            attrs["completed_time"] = timezone.now()

        if "due_date" in attrs and attrs["due_date"]:
            if not self.instance and attrs["due_date"] < timezone.now():
                raise serializers.ValidationError(
                    {"due_date": "Due date cannot be in the past."}
                )

        return attrs

    def validate_reminders(self, value):
        if value is None:
            return value

        if not isinstance(value, list):
            raise serializers.ValidationError("Reminders must be a list.")

        for reminder in value:
            if not isinstance(reminder, dict):
                raise serializers.ValidationError("Each reminder must be an object.")

            if "time" not in reminder:
                raise serializers.ValidationError(
                    "Each reminder must contain a 'time' field."
                )

        return value

    def validate_repeat_flag(self, value):
        if value is None:
            return value

        valid_options = [
            "daily",
            "weekly",
            "monthly",
            "yearly",
            "weekdays",
            "weekends",
            "custom",
        ]

        if value not in valid_options:
            raise serializers.ValidationError(
                f"Repeat flag must be one of {', '.join(valid_options)}."
            )

        return value

    def create(self, validated_data):
        if validated_data.get("completed", False) and not validated_data.get(
            "completed_time"
        ):
            validated_data["completed_time"] = timezone.now()

        is_highlight = validated_data.get("is_highlight", False)
        due_date = validated_data.get("due_date")

        if is_highlight and due_date:
            self._clear_existing_highlights(due_date)

        return super().create(validated_data)

    def update(self, instance, validated_data):
        if "completed" in validated_data and validated_data["completed"]:
            if not instance.completed or not validated_data.get("completed_time"):
                validated_data["completed_time"] = timezone.now()

        elif "completed" in validated_data and not validated_data["completed"]:
            validated_data["completed_time"] = None

        is_highlight = validated_data.get("is_highlight", False)

        if is_highlight and not instance.is_highlight:
            due_date = validated_data.get("due_date", instance.due_date)

            if due_date:
                self._clear_existing_highlights(due_date, instance.id)

        return super().update(instance, validated_data)

    def _clear_existing_highlights(self, date, exclude_id=None):
        """Helper method to clear highlights from existing tasks for a given day"""

        start_of_day = date.replace(hour=0, minute=0, second=0, microsecond=0)
        end_of_day = start_of_day.replace(
            hour=23, minute=59, second=59, microsecond=999999
        )

        highlighted_tasks = Task.objects.filter(
            Q(due_date__range=(start_of_day, end_of_day)) & Q(is_highlight=True)
        )

        if exclude_id:
            highlighted_tasks = highlighted_tasks.exclude(id=exclude_id)

        highlighted_tasks.update(is_highlight=False)


class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTask
        fields = (
            "task",
            "title",
            "completed",
            "completed_time",
        )

    def validate(self, attrs):
        if attrs.get("completed", False) and not attrs.get("completed_time"):
            attrs["completed_time"] = timezone.now()

        if "task" in attrs and not attrs["task"].pk:
            raise serializers.ValidationError({"task": "This task does not exist."})

        return attrs

    def create(self, validated_data):
        if validated_data.get("completed", False) and not validated_data.get(
            "completed_time"
        ):
            validated_data["completed_time"] = timezone.now()

        return super().create(validated_data)

    def update(self, instance, validated_data):
        if "completed" in validated_data and validated_data["completed"]:
            if not instance.completed or not validated_data.get("completed_time"):
                validated_data["completed_time"] = timezone.now()

        elif "completed" in validated_data and not validated_data["completed"]:
            validated_data["completed_time"] = None

        return super().update(instance, validated_data)


class ReflectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reflection
        fields = (
            "title",
            "notes",
            "mood",
            "productivity_rating",
        )

    def validate(self, attrs):
        if (
            "mood" in attrs
            and attrs["mood"] not in dict(Reflection.MOOD_CHOICES).keys()
        ):
            raise serializers.ValidationError(
                {"mood": "Invalid mood rating, must be between 1 and 5."}
            )

        if (
            "productivity_rating" in attrs
            and attrs["productivity_rating"]
            not in dict(Reflection.PRODUCTIVITY_CHOICES).keys()
        ):
            raise serializers.ValidationError(
                {
                    "productivity_rating": "Invalid productivity rating, must be between 1 and 5."
                }
            )

        return attrs

    def create(self, validated_data):
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
