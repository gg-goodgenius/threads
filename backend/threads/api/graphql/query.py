import graphene
from django.db.models import QuerySet
from graphql_jwt.decorators import login_required, permission_required, staff_member_required, superuser_required
from django.contrib.auth.models import Group

# user modules
from api.graphql.types import (
                                InternEventGraphQLType,
                                UserGraphQLType, 
                                GroupGraphQLType, 
                                VolunteerEvent, 
                                InternEvent,
                                VolunteerEventGraphQLType
                                )
from core.models import User

def _resolve_objects(cls, info) -> QuerySet:
    return cls.objects.all()

def _resolve_object_by_id(cls, info, id) -> object | None:
    if id:
        return cls.objects.get(pk=id)
    else:
        return None


class Query(graphene.ObjectType):
    getUsers = graphene.List(UserGraphQLType, description='Список пользователей')
    getGroups = graphene.List(GroupGraphQLType, description='Список групп пользователей')
    getVolunteerEvents = graphene.List(VolunteerEventGraphQLType, description='Список волонтерств')
    getInternEvents = graphene.List(InternEventGraphQLType, description='Список стажировок')

    getUser = graphene.Field(UserGraphQLType, id=graphene.Int(), description='Пользователь')
    getGroup = graphene.Field(GroupGraphQLType, id=graphene.Int(), description='Группа пользователей')
    getVolunteerEvent = graphene.Field(VolunteerEventGraphQLType, id=graphene.Int(), description='Волонтерство')
    getInternEvent = graphene.Field(InternEventGraphQLType, id=graphene.Int(), description='Стажировка')


    @login_required
    def resolve_getUsers(root, info) -> QuerySet:
        return _resolve_objects(User, info)

    @login_required
    def resolve_getGroups(root, info) -> QuerySet:
        return _resolve_objects(Group, info)
    
    def resolve_getVolunteerEvents(root, info) -> QuerySet:
        return _resolve_objects(Group, info)

    @login_required
    def resolve_getUser(root, info, id) -> object:
        return _resolve_object_by_id(User, info, id)

    @login_required
    def resolve_getGroup(root, info, id) -> object:
        return _resolve_object_by_id(Group, info, id)

    @login_required
    def resolve_getVolunteerEvent(root, info, id) -> object:
        return _resolve_object_by_id(VolunteerEvent, info, id)

    @login_required
    def resolve_getInternEvent(root, info, id) -> object:
        return _resolve_object_by_id(InternEvent, info, id)


    class Meta:
        description = "Запросы к пользователям и группам"
