from graphene_django_cud.mutations import DjangoCreateMutation,  DjangoUpdateMutation, DjangoDeleteMutation
from events.models import Report


class CreateReportMutation(DjangoCreateMutation):
    class Meta:
        model = Report

class UpdateReportMutation(DjangoUpdateMutation):
    class Meta:
        model = Report

class DeleteReportMutation(DjangoDeleteMutation):
    class Meta:
        model = Report