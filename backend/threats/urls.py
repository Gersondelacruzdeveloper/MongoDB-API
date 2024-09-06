# threats/urls.py
from django.urls import path
from .views import ThreatListCreateView, ThreatDetailView

urlpatterns = [
    path('threats/', ThreatListCreateView.as_view(), name='threat-list-create'),
    path('threats/<str:pk>/', ThreatDetailView.as_view(), name='threat-detail'),
]
