# threats/serializers.py
from rest_framework import serializers
from .models import CyberThreat

class CyberThreatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CyberThreat
        fields = '__all__'
