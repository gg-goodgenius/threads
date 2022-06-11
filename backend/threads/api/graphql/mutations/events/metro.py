from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Metro


class CreateMetroMutation(DjangoCreateMutation):
    class Meta:
        model = Metro

class UpdateMetroMutation(DjangoUpdateMutation):
    class Meta:
        model = Metro

class DeleteMetroMutation(DjangoDeleteMutation):
    class Meta:
        model = Metro