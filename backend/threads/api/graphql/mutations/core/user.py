import graphene
from api.graphql.types import UserGraphQLType
from graphql_jwt.shortcuts import create_refresh_token, get_token

from core.models import User
from django.contrib.auth.models import Group

class RegistrationUser(graphene.Mutation):
    '''Регистрации пользователя '''
    class Arguments:
        email = graphene.String(required=True, description='Электронная почта пользователя')
        password = graphene.String(required=True, description='Пароль пользователя')
        type_account = graphene.Int(required=True, description='Тип пользователя (0 - волонтер, 1 - НКО, 2 - представитель бизнеса)')
    
    class Meta:
        description = 'Регистрация пользователя'

    ok = graphene.Boolean(description='Результат регистрации')
    token = graphene.String(description='Токен')

    @classmethod
    def mutate(cls, root, info, email, password, type_account) -> graphene.Mutation:
        try:
            new_user = User(email=email, type_account=type_account)
            new_user.set_password(password)
            new_user.save()
        except Exception as e:
            raise 
        try:
            if type_account == 0:
                group =  Group.objects.filter(name='Волонтер').first()
            elif type_account == 1:
                group =  Group.objects.filter(name='НКО').first()
            else:
                group =  Group.objects.filter(name='Бизнес').first()
            if not group:
                raise Exception('Add group error')
            new_user.groups.add(group)
            new_user.save()
            ok = True
            token = get_token(new_user)
        except Exception as e:
            new_user.delete()
            raise
        return RegistrationUser(ok=ok, token=token)
