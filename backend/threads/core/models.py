from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

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
    email = models.EmailField(
        unique=True,
    )
    middle_name = models.CharField(
        verbose_name='Отчество',
        max_length=190,
        null=True,
        blank=True,
    )
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