from distutils.command.upload import upload
from tabnanny import verbose
from django.db import models

from core.models import User
from events.models import Tag

class Friendship(models.Model):
    ''' Дружба двух участников '''
    class Meta:
        verbose_name = 'Дружба'
        verbose_name_plural = 'Дружба'

    from_user = models.ForeignKey(to=User, verbose_name='От', on_delete=models.CASCADE, related_name='my_requests')
    to_user = models.ForeignKey(to=User, verbose_name='Кому', on_delete=models.CASCADE, related_name='requests_for_me')

    def __str__(self) -> str:
        return f'{self.from_user} - {self.to_user}'
    

class Command(models.Model):
    ''' Команда '''
    class Meta:
        verbose_name = 'Команда'
        verbose_name_plural = 'Команды'

    name = models.CharField(max_length=255)
    image = models.ImageField(verbose_name='Аватарка', upload_to='command')
    description = models.TextField()
    tags = models.ManyToManyField(to=Tag, verbose_name='Хештег', related_name='commands')
    members = models.ManyToManyField(to=User)

    def __str__(self) -> str:
        return f'{self.name}'