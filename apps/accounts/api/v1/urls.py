from django.urls import path
from . import views
from knox.views import LogoutView, LogoutAllView

urlpatterns = [
    path("v1/accounts/users/", views.ListUserView.as_view()),
    path("v1/accounts/users/register/", views.CreateUserView.as_view()),
    path("v1/accounts/users/<uuid:pk>", views.RetrieveUserView.as_view()),
    path("v1/accounts/users/update/<uuid:pk>", views.UpdateUserView.as_view()),
    path("v1/accounts/users/login/", views.LoginView.as_view()),
    path("v1/accounts/users/logout/", LogoutView.as_view()),
    path("v1/accounts/users/logout-all/", LogoutAllView.as_view()),
]
