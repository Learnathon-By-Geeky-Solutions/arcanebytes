from django.urls import path, include

from apps.accounts.api.v1 import urls as auth_urls
from apps.kaizen.api.v1 import urls as kaizen_urls


urlpatterns = [
    path("v1/accounts/", include(auth_urls)),
    path('v1/', include(kaizen_urls)),
]
