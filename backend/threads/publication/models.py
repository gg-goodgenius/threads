from django.db import models
from core.models import User
from events.models import Tag


class Article(models.Model):
    ''' Публикации '''
    name = models.CharField(verbose_name='Публикация', max_length=255)
    text = models.TextField(verbose_name='Текст публикации')
    author = models.ForeignKey(to=User, related_name='article', on_delete=models.CASCADE, verbose_name='Автор')
    
    class Meta:
        verbose_name = 'Публикация'
        verbose_name_plural = 'Публикации'

    def __str__(self) -> str:
        return f'{self.name}'

class News(models.Model):
    ''' Новости '''
    name = models.CharField(verbose_name='Публикация', max_length=255)
    text = models.TextField(verbose_name='Текст публикации')
    author = models.ForeignKey(to=User, related_name='news', on_delete=models.CASCADE, verbose_name='Автор')
    date = models.DateField(auto_now_add=True, verbose_name='Дата')
    tags = models.ManyToManyField(to=Tag)

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self) -> str:
        return f'{self.name}'