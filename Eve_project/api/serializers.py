from django.contrib.auth.models import Group, User
from .models import Energy
from rest_framework import serializers


class EnergySerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy
        fields = ['id','name', 'description']