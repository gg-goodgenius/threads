from distutils.command.upload import upload
from django.db import models

from core.models import User
from events.models import Tag

class Friendship(models.Model):
    ''' Дружба двух участников '''
    from_user = models.ForeignKey(to=User, verbose_name='От', on_delete=models.CASCADE, related_name='my_requests')
    to_user = models.ForeignKey(to=User, verbose_name='Кому', on_delete=models.CASCADE, related_name='requests_for_me')


class Command(models.Model):
    ''' Команда '''
    name = models.CharField(max_length=255)
    image = models.ImageField(verbose_name='Аватарка', upload_to='command')
    description = models.TextField()
    tags = models.ForeignKey(to=Tag, verbose_name='Хештег', on_delete=models.CASCADE, related_name='commands')
    members = models.ManyToManyField(to=User)