from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.forms import UserCreationForm

from .models import User


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = (
            "display_name",
            "username",
            "email",
            "img_url",
            "about",
            "pscore",
        )


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = (
            "display_name",
            "username",
            "email",
            "img_url",
            "about",
            "pscore",
            "is_active",
            "is_staff",
        )
