from graphene_django import DjangoObjectType
from django.contrib.auth.models import Group

from core.models import User
from events.models import VolunteerEvent, InternEvent

class UserGraphQLType(DjangoObjectType):
    class Meta:
        model = User
        description = 'Пользователь'


class GroupGraphQLType(DjangoObjectType):
    class Meta:
        model = Group
        description = 'Группа пользователей'


class VolunteerEventGraphQLType(DjangoObjectType):
    class Meta:
        model = VolunteerEvent
        description = 'Волонтерство'


class InternEventGraphQLType(DjangoObjectType):
    class Meta:
        model = InternEvent
        description = 'Стажировка'
