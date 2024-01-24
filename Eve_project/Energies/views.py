from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import Energie
from .serializer import EnergieSerializer

class EnergieList(generics.ListCreateAPIView):
    queryset = Energie.objects.all()
    serializer_class = EnergieSerializer

class EnergieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Energie.objects.all()
    serializer_class = EnergieSerializer
