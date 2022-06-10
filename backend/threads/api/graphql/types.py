from graphene_django import DjangoObjectType
from django.contrib.auth.models import Group

from core.models import User


class UserGraphQLType(DjangoObjectType):
    class Meta:
        model = User
        description = 'Пользователь'


class GroupGraphQLType(DjangoObjectType):
    class Meta:
        model = Group
        description = 'Группа пользователей'
