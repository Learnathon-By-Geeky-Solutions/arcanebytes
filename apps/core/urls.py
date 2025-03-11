from django.urls import path, include

from apps.accounts.api.v1 import urls as auth_urls


urlpatterns = [
    path("", include(auth_urls)),
]
