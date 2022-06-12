from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
# from events.models import InternEvent, Tag, VolunteerEvent
# Раздел описание моделей с пользователями

class UserManager(BaseUserManager):
    ''' Класс менеджера пользователей  '''
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Не указана электронная почта пользователя')

        user = self.model(
            email=email,
        )

        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.model(
            email=email
        )
        user.is_superuser = True
        user.is_staff = True
        user.set_password(password)
        print(user)
        user.save(using=self._db)
        return user


class User(AbstractUser):
    ''' Класс  пользователей '''
    username = None
    email = models.EmailField(unique=True)
    middle_name = models.CharField(verbose_name='Отчество', max_length=190,  null=True, blank=True)
    type_account = models.IntegerField(verbose_name='Тип аккаунта', default=0)
    telegram = models.CharField(max_length=300, verbose_name='telegram')
    phone = models.CharField(max_length=15, verbose_name='номер телефона')
    description = models.TextField(verbose_name='Описание')
    status = models.CharField(verbose_name='Статус', max_length=190, null=True, blank=True)
    image = models.ImageField(verbose_name='Аватарка', null=True, blank=True)

    # tags = models.ManyToManyField(to=Tag)
    # favorite_intern_events = models.ForeignKey(to=InternEvent, on_delete=models.SET_NULL, related_name='users', verbose_name='Избранные стажировки')
    # favorite_volunteer_events = models.ForeignKey(to=VolunteerEvent, on_delete=models.SET_NULL, related_name='users', verbose_name='Избранные волонтерства')
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email

    def get_short_name(self):
        ''' Вывод фамилии и инициалов, если нет, то почту'''
        short_name = self.email
        if self.last_name != '':
            short_name = f'{self.last_name} {self.first_name[0]}. {self.middle_name[0]}.'
        return short_name

    class Meta:
        ordering = ['email']
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'