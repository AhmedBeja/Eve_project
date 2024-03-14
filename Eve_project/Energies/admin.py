from django.contrib import admin
from .models import Energie, Energy_type,Energy_mean,Energy_vector

# Register your models here.
admin.site.register(Energie)
admin.site.register(Energy_type)
admin.site.register(Energy_mean)
admin.site.register(Energy_vector)