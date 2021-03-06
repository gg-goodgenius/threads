# Generated by Django 4.0.5 on 2022-06-12 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_alter_contact_options_alter_tag_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300, verbose_name='Навык')),
            ],
            options={
                'verbose_name': 'Навык',
                'verbose_name_plural': 'Навыки',
            },
        ),
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Контакт', 'verbose_name_plural': 'Контакты'},
        ),
        migrations.AlterModelOptions(
            name='internevent',
            options={'verbose_name': 'Стажировка', 'verbose_name_plural': 'Стажировки'},
        ),
        migrations.AlterModelOptions(
            name='metro',
            options={'verbose_name': 'Станция метро', 'verbose_name_plural': 'Станции метро'},
        ),
        migrations.AlterModelOptions(
            name='photo',
            options={'verbose_name': 'Фотография', 'verbose_name_plural': 'Фотографии'},
        ),
        migrations.AlterModelOptions(
            name='report',
            options={'verbose_name': 'Отчет', 'verbose_name_plural': 'Отчеты'},
        ),
        migrations.AlterModelOptions(
            name='schedule',
            options={'ordering': ['timedate'], 'verbose_name': 'Пункт расписания', 'verbose_name_plural': 'Пункты расписания'},
        ),
        migrations.AlterModelOptions(
            name='tag',
            options={'verbose_name': 'Хэштег', 'verbose_name_plural': 'Хэштеги'},
        ),
        migrations.AlterModelOptions(
            name='volunteerevent',
            options={'verbose_name': 'Волотерство', 'verbose_name_plural': 'Волотерства'},
        ),
        migrations.RemoveField(
            model_name='internevent',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='volunteerevent',
            name='skills',
        ),
        migrations.AddField(
            model_name='volunteerevent',
            name='skills',
            field=models.ManyToManyField(blank=True, null=True, to='events.skill', verbose_name='Необходимые навыки'),
        ),
    ]
