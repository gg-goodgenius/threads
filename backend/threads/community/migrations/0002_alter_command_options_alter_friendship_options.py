# Generated by Django 4.0.5 on 2022-06-12 10:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='command',
            options={'verbose_name': 'Команда', 'verbose_name_plural': 'Команды'},
        ),
        migrations.AlterModelOptions(
            name='friendship',
            options={'verbose_name': 'Дружба', 'verbose_name_plural': 'Дружба'},
        ),
    ]
