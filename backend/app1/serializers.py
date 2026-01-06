from rest_framework import serializers
from .models import SlideHistory

class SlideHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SlideHistory
        fields = '__all__'
