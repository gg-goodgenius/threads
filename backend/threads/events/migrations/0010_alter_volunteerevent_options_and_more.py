# Generated by Django 4.0.5 on 2022-06-12 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0009_internevent_date_start_request_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='volunteerevent',
            options={'ordering': ['-image'], 'verbose_name': 'Волотерство', 'verbose_name_plural': 'Волотерства'},
        ),
        migrations.AlterField(
            model_name='internevent',
            name='organization',
            field=models.CharField(default='Мосволонтер', max_length=300, verbose_name='Организации'),
        ),
        migrations.AlterField(
            model_name='volunteerevent',
            name='organization',
            field=models.CharField(default='Мосволонтер', max_length=300, verbose_name='Организации'),
        ),
    ]
