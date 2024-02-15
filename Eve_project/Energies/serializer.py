from rest_framework import serializers
from .models import Energie,Energy_mean,Energy_type

# User -> id, name, email, gender
class EnergieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energie
        fields = ('id', 'name', 'description', 'lcoe','group')

class Energie_meanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_mean
        fields = ('id', 'family', 'type', 'pourcentage','group')

class Energie_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_type
        fields = ('id', 'type', 'pourcentage','Energie_totale','group')