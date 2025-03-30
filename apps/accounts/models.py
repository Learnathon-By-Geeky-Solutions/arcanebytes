import uuid

from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    display_name = models.CharField(
        _("display name"), max_length=255, blank=True, default=""
    )
    username = models.CharField(
        _("username"), unique=True, blank=True, default="", max_length=36
    )
    email = models.EmailField(_("email address"), unique=True)
    img_url = models.URLField(_("image url"), blank=True)
    about = models.TextField(_("about"), blank=True)
    pscore = models.IntegerField(_("experiance points"), default=0)

    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated at"), auto_now=True)

    is_staff = models.BooleanField(_("is staff"), default=False)
    is_superuser = models.BooleanField(_("is superuser"), default=False)
    is_active = models.BooleanField(_("is active"), default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "username",
    ]

    objects = CustomUserManager()

    def __str__(self):
        return self.email
