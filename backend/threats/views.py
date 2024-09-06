from django.shortcuts import render

# threats/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import CyberThreat
from rest_framework.views import APIView
from .serializers import CyberThreatSerializer

class ApiOverview(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        api_urls = {
            'overview': 'api/overview/',
            'threats list': 'api/threats/',
            'GET list': 'api/threats/<str:pk/',
            "PUT/Update": 'api/threats/<str:pk/',
            'DELETE': 'api/threats/<str:pk/',
        }
        return Response(api_urls)
    
# List and create threats
class ThreatListCreateView(generics.ListCreateAPIView):
    queryset = CyberThreat.objects.all()
    print('queryset', queryset)
    serializer_class = CyberThreatSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

# Retrieve, update, or delete a threat
class ThreatDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CyberThreat.objects.all()
    serializer_class = CyberThreatSerializer
    permission_classes = [IsAuthenticated]
