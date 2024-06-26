# Generated by Django 5.0.1 on 2024-02-14 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Energies', '0007_energy_type_energie_totale'),
    ]

    operations = [
        migrations.AddField(
            model_name='energie',
            name='group',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energy_mean',
            name='group',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energy_type',
            name='group',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
