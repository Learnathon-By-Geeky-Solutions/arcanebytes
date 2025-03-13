from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, SubTaskViewSet, ReflectionViewSet

# Create a router and register viewsets
router = DefaultRouter()
router.register(r"tasks", TaskViewSet)
router.register(r"subtasks", SubTaskViewSet)
router.register(r"reflections", ReflectionViewSet)

urlpatterns = [
    path("", include(router.urls)),  # This will expose API endpoints
]