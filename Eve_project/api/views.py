from django.contrib.auth.models import Group, User
from .models import Energy
from rest_framework import permissions, viewsets

from .serializers import EnergySerializer


class EnergyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Energy.objects.all()
    serializer_class = EnergySerializer
