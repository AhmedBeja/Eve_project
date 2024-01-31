from django.contrib import admin
from .models import Energie, Energy_type,Energy_mean

# Register your models here.
admin.site.register(Energie)
admin.site.register(Energy_type)
admin.site.register(Energy_mean)