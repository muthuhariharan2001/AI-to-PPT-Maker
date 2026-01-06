from django.urls import path
from .views import generate_ppt, save_history, download_ppt, user_history

urlpatterns = [
    path('generate-ppt', generate_ppt),
    path('save-history', save_history),
    path('download/<int:id>', download_ppt),
    path('history', user_history),
]
