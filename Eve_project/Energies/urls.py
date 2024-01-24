from django import urls
from django.urls import path
from .views import EnergieList, EnergieDetail, helloWorld

urlpatterns = [
    path('energies/', EnergieList.as_view(), name="energie-list"),
    path('energies/<int:pk>/', EnergieDetail.as_view(), name='energie-detail'),
    path('hello/', helloWorld, name='hello-world')
] 