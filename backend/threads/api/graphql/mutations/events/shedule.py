from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Schedule


class CreateScheduleMutation(DjangoCreateMutation):
    class Meta:
        model = Schedule

class UpdateScheduleMutation(DjangoUpdateMutation):
    class Meta:
        model = Schedule

class DeleteScheduleMutation(DjangoDeleteMutation):
    class Meta:
        model = Schedule