from rest_framework import viewsets
from apps.kaizen.models import Task, SubTask, Reflection
from .serializers import TaskSerializer, SubTaskSerializer, ReflectionSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class SubTaskViewSet(viewsets.ModelViewSet):
    queryset = SubTask.objects.all()
    serializer_class = SubTaskSerializer

class ReflectionViewSet(viewsets.ModelViewSet):
    queryset = Reflection.objects.all()
    serializer_class = ReflectionSerializer
