from django.urls import path
from . import views
from knox.views import LogoutView, LogoutAllView

urlpatterns = [
    path("users/", views.ListUserView.as_view()),
    path("users/register/", views.CreateUserView.as_view()),
    path("users/<uuid:pk>", views.RetrieveUserView.as_view()),
    path("users/update/<uuid:pk>", views.UpdateUserView.as_view()),
    path("users/login/", views.LoginView.as_view()),
    path("users/logout/", LogoutView.as_view()),
    path("users/logout-all/", LogoutAllView.as_view()),
]
