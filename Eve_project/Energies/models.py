from django.db import models

# Create your models here.
class Energie(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    name= models.CharField(max_length=255)
    description = models.CharField(max_length=1000)
    description_electricite= models.CharField(max_length=255)
    type_technologie=models.CharField(max_length=255)
    installation=models.CharField(max_length=255)
    surface=models.CharField(max_length=255)
    rendement=models.CharField(max_length=255)
    puissance_installee=models.CharField(max_length=255)
    type_technologie=models.CharField(max_length=255)
    puissance_unitaire=models.CharField(max_length=255)
    puissance_vulgarisee=models.CharField(max_length=255)
    equivalent_petrole=models.CharField(max_length=255)
    acteurs_principaux=models.CharField(max_length=255)
    duree_vie=models.CharField(max_length=255)
    cout_du_combustible=models.CharField(max_length=255)
    points_negatifs=models.CharField(max_length=1000)
    idee_recue=models.CharField(max_length=1000)
    tendance=models.CharField(max_length=255)
    lcoe = models.CharField(max_length=255)
    group=models.CharField(max_length=255)
    electricite=models.IntegerField()
    chaleur=models.IntegerField()
    combustible=models.IntegerField()

    def __str__(self):
        return self.name
    
class Energy_type(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    type = models.CharField(max_length=255)
    pourcentage=models.IntegerField()
    Energie_totale=models.IntegerField()
    group=models.CharField(max_length=255)

    def __str__(self):
        return self.id

class Energy_vector(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    type = models.CharField(max_length=255)
    pourcentage=models.IntegerField()
    Energie_totale=models.IntegerField()

    def __str__(self):
        return self.id
    
class Energy_mean(models.Model):
    id = models.CharField(max_length=255,primary_key=True)
    family= models.ForeignKey(Energy_type, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    pourcentage=models.IntegerField()
    group=models.CharField(max_length=255)

    def __str__(self):
        return self.id
    