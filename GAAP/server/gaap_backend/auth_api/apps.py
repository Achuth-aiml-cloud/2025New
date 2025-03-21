# Update auth_api/apps.py to look like this:
from django.apps import AppConfig

class AuthApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'auth_api'