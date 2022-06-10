import graphene
from django.db.models import QuerySet
from graphql_jwt.decorators import login_required, permission_required, staff_member_required, superuser_required
from django.contrib.auth.models import Group

# user modules
from api.graphql.types import UserGraphQLType, GroupGraphQLType
from core.models import User

def _resolve_objects(cls, info):
    user = info.context.user
    print(user.has_perm('core.add_user'))
    return cls.objects.all()

def _resolve_object_by_id(cls, info, id) -> QuerySet | None:
    if id:
        return cls.objects.get(pk=id)
    else:
        return None


class Query(graphene.ObjectType):
    getUsers = graphene.List(UserGraphQLType, description='Получить список пользователей')
    getGroups = graphene.List(GroupGraphQLType, description='Получить список групп пользователей')
    getUser = graphene.Field(UserGraphQLType, id=graphene.Int(), description='Получить данные пользователя')
    getGroup = graphene.Field(GroupGraphQLType, id=graphene.Int(), description='Получить данные группы пользователей')
    getVoid = graphene.List(UserGraphQLType, description='Получить список пользователей')

    @login_required
    def resolve_getVoid(root, info) -> QuerySet:
        return _resolve_objects(User, info)

    @login_required
    def resolve_getUsers(root, info) -> QuerySet:
        return _resolve_objects(User, info)

    @login_required
    def resolve_getGroups(root, info) -> QuerySet:
        return _resolve_objects(Group, info)

    @login_required
    def resolve_getUser(root, info, id):
        return _resolve_object_by_id(User, info, id)

    @login_required
    def resolve_getGroup(root, info, id):
        return _resolve_object_by_id(Group, info, id)


    class Meta:
        description = "Запросы к пользователям и группам"
