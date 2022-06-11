import graphene
import graphql_jwt
from core.models import User
from django.contrib.auth.models import Group
from api.graphql.types import UserGraphQLType

class RegistrationUser(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True, description='Электронная почта пользователя')
        password = graphene.String(required=True, description='Пароль пользователя')
        type_account = graphene.Int(required=True, description='Тип пользователя (0 - волонтер, 1 - НКО, 2 - представитель бизнеса)')
    
    class Meta:
        description = 'Регистрация пользователя'

    ok = graphene.Boolean(description='Результат регистрации')
    user = graphene.Field(UserGraphQLType, description='Зарегистрированный пользователь')

    @classmethod
    def mutate(cls, root, info, email, password, type_account):
        new_user = User(email=email, type_account=type_account)
        new_user.set_password(password)
        new_user.save()
        if type_account == 0:
            group =  Group.objects.filter(name='Волонтер').first()
        elif type_account == 1:
            group =  Group.objects.filter(name='НКО').first()
        else:
            group =  Group.objects.filter(name='Бизнес').first()
        new_user.groups.add(group)
        new_user.save()
        ok = True
        return RegistrationUser(ok=ok, user=new_user)
        
        



class Mutation(graphene.ObjectType):
    login = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    registration_user = RegistrationUser.Field()


