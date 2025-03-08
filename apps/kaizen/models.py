import uuid
from django.db import models
from apps.accounts.models import User
from common.models import BaseModel


# Task model
class Task(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    priority = models.IntegerField()
    due_date = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    completed_time = models.DateTimeField(blank=True, null=True)
    is_all_day = models.BooleanField(default=False)
    reminders = models.JSONField(blank=True, null=True)
    repeat_flag = models.CharField(max_length=50, blank=True, null=True)
    time_zone = models.CharField(max_length=50, blank=True, null=True)
    is_highlight = models.BooleanField(default=False)

    def __str__(self):
        return self.title


# SubTask model
class SubTask(BaseModel):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="subtasks")
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    completed_time = models.DateTimeField(blank=True, null=True)
    is_all_day = models.BooleanField(default=False)
    start_date = models.DateTimeField()
    time_zone = models.CharField(max_length=50, blank=True, null=True)
    sort_order = models.IntegerField()

    def __str__(self):
        return self.title


# Reflection model
class Reflection(BaseModel):
    RATING_CHOICES = [
        (1, "Very Bad"),
        (2, "Bad"),
        (3, "Neutral"),
        (4, "Good"),
        (5, "Very Good"),
    ]

    date = models.DateField()
    title = models.CharField(max_length=255)
    reflection = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES)

    def __str__(self):
        return self.title
=======
from django.db import models  # noqa: F401
