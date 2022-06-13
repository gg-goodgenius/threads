from lib2to3.pgen2 import grammar
import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import Group

from core.models import User
from events.models import *

class UserGraphQLType(DjangoObjectType):
    id = graphene.Int()
    image_url = graphene.String()

    class Meta:
        model = User
        description = 'Пользователь'

    def resolve_image_url(self, info):
        print(dir(info.context))
        print(info.context.path)
        return f'{info.context.scheme}://{info.context.get_host()}/media/{self.image}'


class GroupGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Group
        description = 'Группа пользователей'


class VolunteerEventGraphQLType(DjangoObjectType):
    id = graphene.Int()
    date_event_str = graphene.String()

    class Meta:
        model = VolunteerEvent
        description = 'Волонтерство'

    member_count = graphene.Int(description='Количество учатсников')
    def resolve_member_count(self, info):
        return self.get_coutn_members()

    def resolve_date_event_str(self, info):
        return self.date_event_str()
        


class InternEventGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = InternEvent
        description = 'Стажировка'

    member_count = graphene.Int(description='Количество учатсников')
    def resolve_member_count(self, info):
        return self.get_coutn_members()


class ContactGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Contact
        description = 'Контакт'


class TagGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Tag
        description = 'Тег'


class MetroGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Metro
        description = 'Станция метро'


class ScheduleGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Schedule
        description = 'Пункт расписания'


class PhotoGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Photo
        description = 'Фотография'


class ReportGraphQLType(DjangoObjectType):
    id = graphene.Int()
    class Meta:
        model = Report
        description = 'Отчет'
