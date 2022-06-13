import graphene
from django.db.models import QuerySet
from graphql_jwt.decorators import login_required, permission_required, staff_member_required, superuser_required
from django.contrib.auth.models import Group

# user modules
from api.graphql.types import *
from core.models import User

# Общие функции для получения списка и объекта определенного класса
def _resolve_objects(cls, info, offset, limit, tags=[], metro=[]) -> QuerySet:
    limit = limit + 1 if offset != 0 else limit
    result = cls.objects.all()
    print(tags, metro)
    if tags:
        result = result.filter(tags__in=tags)
    if metro:
        result = cls.objects.filter(metro__in=metro)
    result = result[offset:limit]
    return result 

def _resolve_object_by_id(cls, info, id) -> object | None:
    if id:
        return cls.objects.get(pk=id)
    else:
        return None


class Query(graphene.ObjectType):
    ''' Запросы '''
    # List
    getUsers = graphene.List(UserGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список пользователей')
    getGroups = graphene.List(GroupGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список групп пользователей')
    getVolunteerEvents = graphene.List(VolunteerEventGraphQLType, offset=graphene.Int(), limit=graphene.Int(), tags=graphene.List(graphene.Int), metro=graphene.List(graphene.Int), description='Список волонтерств')
    getInternEvents = graphene.List(InternEventGraphQLType, offset=graphene.Int(), limit=graphene.Int(), tags=graphene.List(graphene.Int), metro=graphene.List(graphene.Int),  description='Список стажировок')
    getTags = graphene.List(TagGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список тегов')
    getContacts = graphene.List(ContactGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список контактов')
    getMetres = graphene.List(MetroGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список станций метро')
    getSchedules = graphene.List(ScheduleGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список пунктов расписания')
    getPhotes = graphene.List(PhotoGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список фотографий')
    getReports = graphene.List(ReportGraphQLType, offset=graphene.Int(), limit=graphene.Int(), description='Список отчетов')


    # instanse
    getUser = graphene.Field(UserGraphQLType, id=graphene.Int(), description='Пользователь')
    getGroup = graphene.Field(GroupGraphQLType, id=graphene.Int(), description='Группа пользователей')
    getVolunteerEvent = graphene.Field(VolunteerEventGraphQLType, id=graphene.Int(), description='Волонтерство')
    getInternEvent = graphene.Field(InternEventGraphQLType, id=graphene.Int(), description='Стажировка')
    getTag = graphene.Field(TagGraphQLType, id=graphene.Int(), description='Тег')
    getContact = graphene.Field(ContactGraphQLType, id=graphene.Int(), description='Контакт')
    getMetro = graphene.Field(MetroGraphQLType, id=graphene.Int(), description='Метро')
    getSchedule = graphene.Field(ScheduleGraphQLType, id=graphene.Int(), description='Расписание')
    getPhoto = graphene.Field(PhotoGraphQLType, id=graphene.Int(), description='Фотография')
    getReport = graphene.Field(ReportGraphQLType, id=graphene.Int(), description='Отчет')

    # определяем resolvers
    @login_required
    def resolve_getUsers(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(User, info, offset, limit)

    @login_required
    def resolve_getGroups(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Group, info, offset, limit)
    
    def resolve_getVolunteerEvents(root, info, offset=0, limit=30, tags=[], metro=[]) -> QuerySet:
        return _resolve_objects(VolunteerEvent, info, offset, limit, tags, metro)
    
    def resolve_getInternEvents(root, info, offset=0, limit=30, tags=[], metro=[]) -> QuerySet:
        return _resolve_objects(InternEvent, info, offset, limit, tags, metro)
    
    def resolve_getTags(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Tag, info, offset, limit)
    
    def resolve_getContacts(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Contact, info, offset, limit)
    
    def resolve_getMetres(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Metro, info, offset, limit)
    
    def resolve_getSchedules(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Schedule, info, offset, limit)
    
    def resolve_getPhotes(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Photo, info, offset, limit)
    
    def resolve_getReports(root, info, offset=0, limit=30) -> QuerySet:
        return _resolve_objects(Report, info, offset, limit)
    
    @login_required
    def resolve_getUser(root, info, id=None) -> object:
        # return _resolve_object_by_id(User, info, id)
        if id:
            return User.objects.get(pk=id)
        else:
            return info.context.user

    @login_required
    def resolve_getGroup(root, info, id) -> object:
        return _resolve_object_by_id(Group, info, id)

    def resolve_getVolunteerEvent(root, info, id) -> object:
        return _resolve_object_by_id(VolunteerEvent, info, id)

    def resolve_getInternEvent(root, info, id) -> object:
        return _resolve_object_by_id(InternEvent, info, id)
    
    def resolve_getTag(root, info, id) -> object:
        return _resolve_object_by_id(Tag, info, id)

    def resolve_getContact(root, info, id) -> object:
        return _resolve_object_by_id(Contact, info, id)

    def resolve_getMetro(root, info, id) -> object:
        return _resolve_object_by_id(Metro, info, id)

    def resolve_getSchedule(root, info, id) -> object:
        return _resolve_object_by_id(Schedule, info, id)

    def resolve_getPhoto(root, info, id) -> object:
        return _resolve_object_by_id(Photo, info, id)

    def resolve_getReport(root, info, id) -> object:
        return _resolve_object_by_id(Report, info, id)
    

    class Meta:
        description = "Запросы к пользователям и группам"
