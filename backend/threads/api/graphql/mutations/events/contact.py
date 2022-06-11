from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Contact


class CreateContactMutation(DjangoCreateMutation):
    class Meta:
        model = Contact

class UpdateContactMutation(DjangoUpdateMutation):
    class Meta:
        model = Contact

class DeleteContactMutation(DjangoDeleteMutation):
    class Meta:
        model = Contact