
# threats/models.py
from djongo import models

class CyberThreat(models.Model):
    threat_id = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    severity_level = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)
    source = models.CharField(max_length=255)

    def __str__(self):
        return self.threat_id
