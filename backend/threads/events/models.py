from distutils.command.upload import upload
from django.db import models
from core.models import User


class Tag(models.Model):
    ''' Хештеги для поиска по мероприятиям '''
    name = models.CharField(max_length=300, verbose_name='Тэг')


class Contact(models.Model):
    ''' Контактная информация '''
    
    TYPE_CONTACT = (
        (0, 'Телефон'),
        (1, 'Telegram'),
        (2, 'vk.com'),
        (3, 'whatsapp'),
    )
    type = models.IntegerField(default=0, verbose_name='Тип контакта')
    value = models.CharField(max_length=255, verbose_name='Контакт')


class Metro(models.Model):
    ''' Станции метро '''

    name = models.CharField(verbose_name='Станция метро', max_length=100)


class Event(models.Model):
    ''' Абстрактная модель мероприятия '''
    class Meta:
        abstract=True
    

    image = models.ImageField(verbose_name='Изображение', blank=True, null=True)
    title = models.CharField(max_length=300, verbose_name='Заголовок')
    tags = models.ManyToManyField(to=Tag)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date_end_request = models.DateField(verbose_name='Дата окончания приема заявок', blank=True, null=True)

    provide = models.TextField(verbose_name='Обеспечение', blank=True, null=True)

    skills = models.TextField(verbose_name='Необходимые навыки', blank=True, null=True)
    age_limits_min = models.IntegerField(verbose_name='Минимальные ограничения возраста', default=16)
    members = models.ManyToManyField(verbose_name='Учатсники', to=User)
    
    contacts = models.ManyToManyField(verbose_name='Контакты', to=Contact)
    metro = models.ForeignKey(to=Metro, on_delete=models.SET_NULL, blank=True, null=True, )
    address = models.CharField(max_length=300, verbose_name='Адрес')
    
    is_template = models.BooleanField(verbose_name='Это шаблон', default=False)
    


class VolunteerEvent(Event):
    ''' Мероприятия для волонтеров '''
    organization = models.ForeignKey(verbose_name='Организатор', to=User, related_name='volunteer_events', on_delete=models.CASCADE)
    personal_needed = models.TextField(verbose_name='Вам необходимо иметь c собой', blank=True, null=True)
    bisness_needed = models.TextField(verbose_name='Нам необходимо от бизнесса', blank=True, null=True)
    date_event = models.DateTimeField(verbose_name='Дата мероприятия', blank=True, null=True)


class InternEvent(Event):
    ''' Мероприятия для стажеров '''
    organization = models.ForeignKey(verbose_name='Компания', to=User, related_name='intern_events', on_delete=models.CASCADE)
    skills_extra = models.TextField(verbose_name='Плюсом будет', blank=True, null=True)
    paycheck = models.IntegerField(verbose_name='Запрлата', default=0)


class Schedule(models.Model):
    ''' Расписание '''
    timedate = models.DateTimeField(verbose_name='Время и дата')
    value = models.CharField(verbose_name='Действие', max_length=255)
    volunteer_event = models.ForeignKey(to=VolunteerEvent, related_name='events', on_delete=models.CASCADE, verbose_name='Волонтерство')


class Photo(models.Model):
    ''' Фотграфии мероприятия '''
    image = models.ImageField(verbose_name='Изображение',upload_to='photes')
    title = models.CharField(max_length=300, verbose_name='Заголовок', blank=True, null=True)
    event = models.ForeignKey(to=VolunteerEvent, related_name='photes', on_delete=models.CASCADE)


class Report(models.Model):
    ''' Отчеты по мероприятиям '''
    document = models.FileField(verbose_name='Документ', upload_to='docs')
    description = models.TextField(verbose_name='Описание',  blank=True, null=True)
