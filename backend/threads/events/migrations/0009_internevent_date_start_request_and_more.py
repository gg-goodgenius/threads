# Generated by Django 4.0.5 on 2022-06-12 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0008_tag_color_alter_internevent_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='internevent',
            name='date_start_request',
            field=models.DateField(blank=True, null=True, verbose_name='Дата начала'),
        ),
        migrations.AddField(
            model_name='internevent',
            name='description_other',
            field=models.TextField(blank=True, null=True, verbose_name='Дополнительное описание'),
        ),
        migrations.AddField(
            model_name='volunteerevent',
            name='date_start_request',
            field=models.DateField(blank=True, null=True, verbose_name='Дата начала'),
        ),
        migrations.AddField(
            model_name='volunteerevent',
            name='description_other',
            field=models.TextField(blank=True, null=True, verbose_name='Дополнительное описание'),
        ),
        migrations.AlterField(
            model_name='internevent',
            name='date_end_request',
            field=models.DateField(blank=True, null=True, verbose_name='Дата окончания'),
        ),
        migrations.AlterField(
            model_name='volunteerevent',
            name='date_end_request',
            field=models.DateField(blank=True, null=True, verbose_name='Дата окончания'),
        ),
    ]
