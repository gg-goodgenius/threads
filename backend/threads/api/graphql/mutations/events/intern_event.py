from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import InternEvent


class CreateInternEventMutation(DjangoCreateMutation):
    class Meta:
        model = InternEvent

class UpdateInternEventMutation(DjangoUpdateMutation):
    class Meta:
        model = InternEvent

class DeleteInternEventMutation(DjangoDeleteMutation):
    class Meta:
        model = InternEvent