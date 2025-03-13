from rest_framework import serializers
from apps.kaizen.models import Task, SubTask, Reflection

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"

class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTask
        fields = "__all__"

class ReflectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reflection
        fields = "__all__"
