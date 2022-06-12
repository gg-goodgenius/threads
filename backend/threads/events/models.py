from distutils.command.upload import upload
from django.db import models
from core.models import User
# from django.apps import apps


class Tag(models.Model):
    ''' Хештеги для поиска по мероприятиям '''
    name = models.CharField(max_length=300, verbose_name='Тэг')


    class Meta:
        verbose_name = 'Хэштег'
        verbose_name_plural = 'Хэштеги'

    def __str__(self) -> str:
        return f'{self.name}'


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

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    def __str__(self) -> str:
        return f'{self.get_type_display()} - {self.value}'


class Metro(models.Model):
    ''' Станции метро '''

    name = models.CharField(verbose_name='Станция метро', max_length=100)

    class Meta:
        verbose_name = 'Станция метро'
        verbose_name_plural = 'Станции метро'

    def __str__(self) -> str:
        return f'{self.name}'


class Skill(models.Model):
    ''' Навыки '''
    name = models.CharField(max_length=300, verbose_name='Навык')


    class Meta:
        verbose_name = 'Навык'
        verbose_name_plural = 'Навыки'

    def __str__(self) -> str:
        return f'{self.name}'



class Event(models.Model):
    ''' Абстрактная модель мероприятия '''
    class Meta:
        abstract=True

    # User = apps.get_model('core', 'User')

    image = models.ImageField(verbose_name='Изображение', blank=True, null=True)
    title = models.CharField(max_length=300, verbose_name='Заголовок')
    tags = models.ManyToManyField(to=Tag)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date_end_request = models.DateField(verbose_name='Дата окончания приема заявок', blank=True, null=True)

    provide = models.TextField(verbose_name='Обеспечение', blank=True, null=True)

    
    age_limits_min = models.IntegerField(verbose_name='Минимальные ограничения возраста', default=16)
    members = models.ManyToManyField(verbose_name='Учатсники', to=User)
    
    contacts = models.ManyToManyField(verbose_name='Контакты', to=Contact)
    metro = models.ForeignKey(to=Metro, on_delete=models.SET_NULL, blank=True, null=True, )
    address = models.CharField(max_length=300, verbose_name='Адрес')
    
    is_template = models.BooleanField(verbose_name='Это шаблон', default=False)

    def __str__(self) -> str:
        return f'{self.title}'

    def get_coutn_members(self):
        return self.members.all().count()
    


class VolunteerEvent(Event):
    ''' Мероприятия для волонтеров '''
    # User = apps.get_model('core', 'User')
    organization = models.ForeignKey(verbose_name='Организатор', to=User, related_name='volunteer_events', on_delete=models.CASCADE)
    personal_needed = models.TextField(verbose_name='Вам необходимо иметь c собой', blank=True, null=True)
    bisness_needed = models.TextField(verbose_name='Нам необходимо от бизнесса', blank=True, null=True)
    date_event = models.DateTimeField(verbose_name='Дата мероприятия', blank=True, null=True)
    skills = models.ManyToManyField(to=Skill, verbose_name='Необходимые навыки')

    class Meta:
        verbose_name = 'Волотерство'
        verbose_name_plural = 'Волотерства'

    
    

class InternEvent(Event):
    ''' Мероприятия для стажеров '''
    # User = apps.get_model('core', 'User')
    organization = models.ForeignKey(verbose_name='Компания', to=User, related_name='intern_events', on_delete=models.CASCADE)
    skills_extra = models.TextField(verbose_name='Плюсом будет', blank=True, null=True)
    paycheck = models.IntegerField(verbose_name='Запрлата', default=0)
    skills = models.ManyToManyField(to=Skill, verbose_name='Необходимые навыки')
    
    class Meta:
        verbose_name = 'Стажировка'
        verbose_name_plural = 'Стажировки'


class Schedule(models.Model):
    ''' Расписание '''
    timedate = models.DateTimeField(verbose_name='Время и дата')
    value = models.CharField(verbose_name='Действие', max_length=255)
    volunteer_event = models.ForeignKey(to=VolunteerEvent, related_name='events', on_delete=models.CASCADE, verbose_name='Волонтерство')

    class Meta:
        verbose_name = 'Пункт расписания'
        verbose_name_plural = 'Пункты расписания'
        ordering = ['timedate']

    def __str__(self) -> str:
        return f'{self.volunteer_event}: {self.timedate} - {self.value}'


class Photo(models.Model):
    ''' Фотграфии мероприятия '''
    image = models.ImageField(verbose_name='Изображение',upload_to='photes')
    title = models.CharField(max_length=300, verbose_name='Заголовок', blank=True, null=True)
    event = models.ForeignKey(to=VolunteerEvent, related_name='photes', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Фотография'
        verbose_name_plural = 'Фотографии'

    def __str__(self) -> str:
        return f'{self.title if self.title else "Без имени"}'


class Report(models.Model):
    ''' Отчеты по мероприятиям '''
    document = models.FileField(verbose_name='Документ', upload_to='docs')
    description = models.TextField(verbose_name='Описание',  blank=True, null=True)

    class Meta:
        verbose_name = 'Отчет'
        verbose_name_plural = 'Отчеты'

    def __str__(self) -> str:
        return f'{self.document.url}'