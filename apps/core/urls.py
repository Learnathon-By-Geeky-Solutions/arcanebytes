from django.urls import path, include

from apps.accounts.api.v1 import urls as auth_urls
from apps.kaizen.api.v1 import urls as kaizen_urls


urlpatterns = [
    path("", include(auth_urls)),
    path("", include(kaizen_urls)),
]
