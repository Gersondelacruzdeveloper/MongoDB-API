from django.shortcuts import render

# threats/views.py
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import CyberThreat
from rest_framework.views import APIView
from .serializers import CyberThreatSerializer
from rest_framework.decorators import api_view, permission_classes

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


#------------------------------------------------ django fuctions
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password, email=email)
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)