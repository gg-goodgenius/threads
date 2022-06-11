# Generated by Django 4.0.5 on 2022-06-11 11:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.IntegerField(default=0, verbose_name='Тип контакта')),
                ('value', models.CharField(max_length=255, verbose_name='Контакт')),
            ],
        ),
        migrations.CreateModel(
            name='Metro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Станция метро')),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('document', models.FileField(upload_to='docs', verbose_name='Документ')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300, verbose_name='Тэг')),
            ],
        ),
        migrations.CreateModel(
            name='VolunteerEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение')),
                ('title', models.CharField(max_length=300, verbose_name='Заголовок')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('date_end_request', models.DateField(verbose_name='Дата окончания приема заявок')),
                ('provide', models.TextField(blank=True, null=True, verbose_name='Обеспечение')),
                ('skills', models.TextField(blank=True, null=True, verbose_name='Необходимые навыки')),
                ('age_limits_min', models.IntegerField(default=16, verbose_name='Минимальные ограничения возраста')),
                ('address', models.CharField(max_length=300, verbose_name='Адрес')),
                ('is_template', models.BooleanField(default=False, verbose_name='Это шаблон')),
                ('personal_needed', models.TextField(verbose_name='Вам необходимо иметь c собой')),
                ('bisness_needed', models.TextField(verbose_name='Нам необходимо от бизнесса')),
                ('date_event', models.DateTimeField(verbose_name='Дата мероприятия')),
                ('contacts', models.ManyToManyField(to='events.contact', verbose_name='Контакты')),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='Учатсники')),
                ('metro', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='events.metro')),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='volunteer_events', to=settings.AUTH_USER_MODEL, verbose_name='Организатор')),
                ('tags', models.ManyToManyField(to='events.tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timedate', models.DateTimeField(verbose_name='Время и дата')),
                ('value', models.CharField(max_length=255, verbose_name='Действие')),
                ('volunteer_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='events.volunteerevent', verbose_name='Волонтерство')),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='photes', verbose_name='Изображение')),
                ('title', models.CharField(blank=True, max_length=300, null=True, verbose_name='Заголовок')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photes', to='events.volunteerevent')),
            ],
        ),
        migrations.CreateModel(
            name='InternEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение')),
                ('title', models.CharField(max_length=300, verbose_name='Заголовок')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('date_end_request', models.DateField(verbose_name='Дата окончания приема заявок')),
                ('provide', models.TextField(blank=True, null=True, verbose_name='Обеспечение')),
                ('skills', models.TextField(blank=True, null=True, verbose_name='Необходимые навыки')),
                ('age_limits_min', models.IntegerField(default=16, verbose_name='Минимальные ограничения возраста')),
                ('address', models.CharField(max_length=300, verbose_name='Адрес')),
                ('is_template', models.BooleanField(default=False, verbose_name='Это шаблон')),
                ('skills_extra', models.TextField(blank=True, null=True, verbose_name='Плюсом будет')),
                ('paycheck', models.IntegerField(default=0, verbose_name='Запрлата')),
                ('contacts', models.ManyToManyField(to='events.contact', verbose_name='Контакты')),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='Учатсники')),
                ('metro', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='events.metro')),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='intern_events', to=settings.AUTH_USER_MODEL, verbose_name='Компания')),
                ('tags', models.ManyToManyField(to='events.tag')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
