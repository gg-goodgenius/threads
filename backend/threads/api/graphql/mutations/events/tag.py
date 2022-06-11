from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Tag


class CreateTagMutation(DjangoCreateMutation):
    class Meta:
        model = Tag

    def __init__(self, *args, **kwargs):
        print(type(Tag))
        super().__init__(*args, **kwargs)

class UpdateTagMutation(DjangoUpdateMutation):
    class Meta:
        model = Tag

class DeleteTagMutation(DjangoDeleteMutation):
    class Meta:
        model = Tag