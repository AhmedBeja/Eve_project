from django.db import models

# Create your models here.
class Energie(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    name= models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    lcoe = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Energy_type(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    type = models.CharField(max_length=255)
    pourcentage=models.IntegerField()

    def __str__(self):
        return self.id
    
class Energy_mean(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    family= models.ForeignKey(Energy_type, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    pourcentage=models.IntegerField()

    def __str__(self):
        return self.id
    