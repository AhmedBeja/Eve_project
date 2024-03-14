from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import Energie,Energy_type,Energy_mean,Energy_vector
from .serializer import EnergieSerializer,Energie_meanSerializer,Energie_typeSerializer,Energie_vectorSerializer

class EnergieList(generics.ListCreateAPIView):
    queryset = Energie.objects.all()
    serializer_class = EnergieSerializer

class EnergieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Energie.objects.all()
    serializer_class = EnergieSerializer


class Energy_meanList(generics.ListCreateAPIView):
    queryset = Energy_mean.objects.all()
    serializer_class = Energie_meanSerializer
class Energie_meanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Energy_mean.objects.all()
    serializer_class = Energie_meanSerializer


class Energie_typeList(generics.ListCreateAPIView):
    queryset = Energy_type.objects.all()
    serializer_class = Energie_typeSerializer

class Energie_typeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Energy_type.objects.all()
    serializer_class = Energie_typeSerializer

class Energie_vectorList(generics.ListCreateAPIView):
    queryset = Energy_vector.objects.all()
    serializer_class = Energie_vectorSerializer

class Energie_vectorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Energy_vector.objects.all()
    serializer_class = Energie_vectorSerializer