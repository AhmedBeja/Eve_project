from django.db import models

# Create your models here.
class Energie(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    lcoe = models.CharField(max_length=255)


    def __str__(self):
        return self.name