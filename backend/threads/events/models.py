from distutils.command.upload import upload
from django.db import models
from core.models import User
from events.load_mosvolonter import get_event
import random
# from django.apps import apps


class Tag(models.Model):
    ''' Хештеги для поиска по мероприятиям '''
    name = models.CharField(max_length=300, verbose_name='Тэг',)
    color = models.CharField(max_length=6, verbose_name='Цвет', default="FF0000")

    def get_random_color(self) -> str:
        self.color = "".join([random.choice('0123456789ABCDEF') for j in range(6)])
        self.save()
        return self.color


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
        return f'{self.value}'


class Metro(models.Model):
    ''' Станции метро '''

    name = models.CharField(verbose_name='Станция метро', max_length=100)
    color = models.CharField(max_length=6, verbose_name='Цвет', default="FF0000")

    class Meta:
        verbose_name = 'Станция метро'
        verbose_name_plural = 'Станции метро'

    def get_random_color(self) -> str:
        self.color = "".join([random.choice('0123456789ABCDEF') for j in range(6)])
        self.save()
        return self.color

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

    image = models.URLField(verbose_name='Изображение', blank=True, null=True)
    title = models.CharField(max_length=300, verbose_name='Заголовок')
    tags = models.ManyToManyField(to=Tag)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date_end_request = models.DateField(verbose_name='Дата окончания', blank=True, null=True)
    date_start_request = models.DateField(verbose_name='Дата начала', blank=True, null=True)

    provide = models.TextField(verbose_name='Обеспечение', blank=True, null=True)
    description_other = models.TextField(verbose_name='Дополнительное описание', blank=True, null=True)
    
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
    
    def create_template(self):
        self.id = None 
        self.is_template = True
        self.title = f"Шаблон из {self.title}"
        self.save()
        return self


    def subscribe(self, user):
        self.members.add(user)
        self.save()


    def have_member(self, user):
        return (user in self.members.all())

    
class VolunteerEventManager(models.Manager):

    def load_mosvolonter(self):
        for event, tags in get_event():
            ve = VolunteerEvent(**event)
            ve.save()
            for tag in tags:
                (t, created) = Tag.objects.get_or_create(name=tag)
                ve.tags.add(t)
            ve.save()
        

class VolunteerEvent(Event):
    ''' Мероприятия для волонтеров '''
    # User = apps.get_model('core', 'User')
    organization = models.CharField(max_length=300, verbose_name='Организации', default="Мосволонтер")
    personal_needed = models.TextField(verbose_name='Вам необходимо иметь c собой', blank=True, null=True)
    bisness_needed = models.TextField(verbose_name='Нам необходимо от бизнесса', blank=True, null=True)
    motivation = models.TextField(verbose_name='Вы получите от волонтерства', blank=True, null=True)
    date_event = models.DateTimeField(verbose_name='Дата мероприятия', blank=True, null=True)
    skills = models.ManyToManyField(to=Skill, verbose_name='Необходимые навыки')

    objects = VolunteerEventManager()

    def date_event_str(self):
        return self.date_event.strftime("%d.%m.%Y")

    class Meta:
        verbose_name = 'Волотерство'
        verbose_name_plural = 'Волотерства'
        ordering = ['-image']


class InternEvent(Event):
    ''' Мероприятия для стажеров '''
    # User = apps.get_model('core', 'User')
    organization = models.CharField(max_length=300, verbose_name='Организации', default="Мосволонтер")
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


