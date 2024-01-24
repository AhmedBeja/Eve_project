from django.db import models

# Create your models here.
class Energy(models.Model):
    name=models.CharField(max_length=60)
    description= models.CharField(max_length=100)