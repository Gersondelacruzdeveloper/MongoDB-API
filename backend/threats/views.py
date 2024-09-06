from django.shortcuts import render

# threats/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import CyberThreat
from .serializers import CyberThreatSerializer

# List and create threats
class ThreatListCreateView(generics.ListCreateAPIView):
    queryset = CyberThreat.objects.all()
    serializer_class = CyberThreatSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

# Retrieve, update, or delete a threat
class ThreatDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CyberThreat.objects.all()
    serializer_class = CyberThreatSerializer
    permission_classes = [IsAuthenticated]
