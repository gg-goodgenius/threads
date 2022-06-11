from graphene_django import DjangoObjectType
from django.contrib.auth.models import Group

from core.models import User
from events.models import *

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


class ContactGraphQLType(DjangoObjectType):
    class Meta:
        model = Contact
        description = 'Контакт'


class TagGraphQLType(DjangoObjectType):
    class Meta:
        model = Tag
        description = 'Тег'


class MetroGraphQLType(DjangoObjectType):
    class Meta:
        model = Metro
        description = 'Станция метро'


class ScheduleGraphQLType(DjangoObjectType):
    class Meta:
        model = Schedule
        description = 'Пункт расписания'


class PhotoGraphQLType(DjangoObjectType):
    class Meta:
        model = Photo
        description = 'Фотография'


class ReportGraphQLType(DjangoObjectType):
    class Meta:
        model = Report
        description = 'Отчет'
