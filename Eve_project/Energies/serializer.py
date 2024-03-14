from rest_framework import serializers
from .models import Energie,Energy_mean,Energy_type,Energy_vector

# User -> id, name, email, gender
class EnergieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energie
        fields = ('id', 'name', 'description', 'lcoe','group','electricite','chaleur','combustible','description_electricite','type_technologie','installation','surface','rendement','puissance_installee','type_technologie','puissance_unitaire','puissance_vulgarisee','equivalent_petrole','acteurs_principaux','duree_vie','points_negatifs','idee_recue','tendance')

class Energie_meanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_mean
        fields = ('id', 'family', 'type', 'pourcentage','group')

class Energie_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_type
        fields = ('id', 'type', 'pourcentage','Energie_totale','group')

class Energie_vectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_vector
        fields = ('id', 'type', 'pourcentage','Energie_totale')