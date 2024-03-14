from django import urls
from django.urls import path
from .views import EnergieList, EnergieDetail,Energie_typeList,Energy_meanList,Energie_meanDetail,Energie_typeDetail,Energie_vectorList

urlpatterns = [
    path('energies/', EnergieList.as_view(), name="energie-list"),
    path('energies_type/', Energie_typeList.as_view(), name="energie_type-list"),
    path('energies_vector/', Energie_vectorList.as_view(), name="energie_vector-list"),
    path('energies_mean/', Energy_meanList.as_view(), name="energie_mean-list"),
    path('energies_type/<int:pk>/', EnergieDetail.as_view(), name='energie_type-detail'),
    path('energies_mean/<int:pk>/', Energie_meanDetail.as_view(), name='energie_mean-detail'),
    path('energies/<int:pk>/', Energie_typeDetail.as_view(), name='energie-detail'),
] 