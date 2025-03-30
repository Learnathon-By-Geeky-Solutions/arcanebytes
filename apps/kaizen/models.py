from django.db import models
from common.models import BaseModel


# Task model
class Task(BaseModel):
    title = models.CharField(max_length=255)
    details = models.TextField(blank=True, default="", null=True)
    due_date = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    completed_time = models.DateTimeField(blank=True, null=True)
    is_all_day = models.BooleanField(default=False)
    reminders = models.JSONField(blank=True, null=True)
    repeat_flag = models.CharField(max_length=50, blank=True, null=True)
    is_highlight = models.BooleanField(default=False)

    def __str__(self):
        return self.title


# SubTask model
class SubTask(BaseModel):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="subtasks")
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    completed_time = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title


# Reflection model
class Reflection(BaseModel):
    MOOD_CHOICES = [
        (1, "Very Sad"),
        (2, "Sad"),
        (3, "Neutral"),
        (4, "Happy"),
        (5, "Very Happy"),
    ]

    PRODUCTIVITY_CHOICES = [
        (1, "Very Unproductive"),
        (2, "Unproductive"),
        (3, "Neutral"),
        (4, "Productive"),
        (5, "Very Productive"),
    ]

    title = models.CharField(max_length=255)
    notes = models.TextField(blank=True, default="", null=True)
    mood = models.IntegerField(choices=MOOD_CHOICES, default=None)
    productivity_rating = models.IntegerField(
        choices=PRODUCTIVITY_CHOICES, default=None
    )

    def __str__(self):
        return self.title
