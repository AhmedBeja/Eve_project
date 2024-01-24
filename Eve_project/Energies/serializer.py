from rest_framework import serializers
from .models import Energie

# User -> id, name, email, gender
class EnergieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energie
        fields = ('id', 'name', 'description', 'lcoe')