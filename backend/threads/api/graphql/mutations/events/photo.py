from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Photo


class CreatePhotoMutation(DjangoCreateMutation):
    class Meta:
        model = Photo

class UpdatePhotoMutation(DjangoUpdateMutation):
    class Meta:
        model = Photo

class DeletePhotoMutation(DjangoDeleteMutation):
    class Meta:
        model = Photo