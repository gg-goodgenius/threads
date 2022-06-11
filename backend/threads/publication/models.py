from django.db import models
from core.models import User
from events.models import Tag


class Article(models.Model):
    ''' Публикации '''
    name = models.CharField(verbose_name='Публикация', max_length=255)
    text = models.TextField(verbose_name='Текст публикации')
    author = models.ForeignKey(to=User, related_name='article', on_delete=models.CASCADE, verbose_name='Автор')
    

class News(models.Model):
    ''' Новости '''
    name = models.CharField(verbose_name='Публикация', max_length=255)
    text = models.TextField(verbose_name='Текст публикации')
    author = models.ForeignKey(to=User, related_name='news', on_delete=models.CASCADE, verbose_name='Автор')
    date = models.DateField(auto_now_add=True, verbose_name='Дата')
    tags = models.ManyToManyField(to=Tag)
