# threats/urls.py
from django.urls import path
from .views import ThreatListCreateView, ThreatDetailView, ApiOverview

urlpatterns = [
    path('threats/', ThreatListCreateView.as_view(), name='threat-list-create'),
    path('threats/<str:pk>/', ThreatDetailView.as_view(), name='threat-detail'),
    path('overview/', ApiOverview.as_view(), name='api-overview'),
]
