from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import VolunteerEvent


class CreateVolunteerEventMutation(DjangoCreateMutation):
    class Meta:
        model = VolunteerEvent

class UpdateVolunteerEventMutation(DjangoUpdateMutation):
    class Meta:
        model = VolunteerEvent

class DeleteVolunteerEventMutation(DjangoDeleteMutation):
    class Meta:
        model = VolunteerEvent