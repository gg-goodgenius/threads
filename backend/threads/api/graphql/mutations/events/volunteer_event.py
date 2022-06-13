from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import VolunteerEvent
import graphene
from api.graphql.types import VolunteerEventGraphQLType

class CreateVolunteerEventMutation(DjangoCreateMutation):
    class Meta:
        model = VolunteerEvent

class UpdateVolunteerEventMutation(DjangoUpdateMutation):
    class Meta:
        model = VolunteerEvent

class DeleteVolunteerEventMutation(DjangoDeleteMutation):
    class Meta:
        model = VolunteerEvent

class CreateTemplateVolunteerEventMutation(graphene.Mutation):
    '''Создание шаблона '''
    class Arguments:
        id = graphene.Int(required=True, description='ID мероприятия')
    
    class Meta:
        description = 'Создание шаблона'

    ok = graphene.Boolean(description='Результат')
    volunteer_event = graphene.Field(VolunteerEventGraphQLType, description='Мероприятие')

    @classmethod
    def mutate(cls, root, info, id) -> graphene.Mutation:
        try:
            ve = VolunteerEvent.objects.get(pk=id)
            tmpl_ve = ve.create_template()
            ok = True
        except Exception as e:
            raise 
        return CreateTemplateVolunteerEventMutation(ok=ok, volunteer_event=tmpl_ve)


class SubscribeEventMutation(graphene.Mutation):
    '''Подписаться на ивент  '''
    class Arguments:
        id = graphene.Int(required=True, description='ID мероприятия')
    
    ok = graphene.Boolean(description='Результат')

    @classmethod
    def mutate(cls, root, info, id) -> graphene.Mutation:
        try:
            ve = VolunteerEvent.objects.get(pk=id)
            tmpl_ve = ve.subscribe(info.context.user)
            ok = True
        except Exception as e:
            raise 
        return CreateTemplateVolunteerEventMutation(ok=ok)