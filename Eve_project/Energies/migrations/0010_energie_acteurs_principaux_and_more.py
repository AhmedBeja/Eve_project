# Generated by Django 5.0.1 on 2024-03-07 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Energies', '0009_energie_chaleur_energie_combustible_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='energie',
            name='acteurs_principaux',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='description_electricite',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='duree_vie',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='equivalent_petrole',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='idee_recue',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='installation',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='points_negatifs',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='puissance_installee',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='puissance_unitaire',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='puissance_vulgarisee',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='rendement',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='surface',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='tendance',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energie',
            name='type_technologie',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
