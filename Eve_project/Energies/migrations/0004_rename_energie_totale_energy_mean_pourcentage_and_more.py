# Generated by Django 5.0.1 on 2024-02-03 10:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Energies', '0003_rename_pourcentage_energy_mean_energie_totale_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='energy_mean',
            old_name='Energie_Totale',
            new_name='pourcentage',
        ),
        migrations.RenameField(
            model_name='energy_type',
            old_name='Energie_Totale',
            new_name='pourcentage',
        ),
    ]
