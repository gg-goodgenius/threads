import graphene
import graphene_django
import graphql_jwt
from graphql_jwt.mutations import token_auth


from api.graphql.mutations.core.user import *
from api.graphql.mutations.events.volunteer_event import *
from api.graphql.mutations.events.intern_event import *
from api.graphql.mutations.events.contact import *
from api.graphql.mutations.events.metro import *
from api.graphql.mutations.events.photo import *
from api.graphql.mutations.events.report import *
from api.graphql.mutations.events.shedule import *
from api.graphql.mutations.events.tag import *




class Mutation(graphene.ObjectType):
    login = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    registration_user = RegistrationUser.Field()

    create_volunteer_event = CreateVolunteerEventMutation.Field()
    update_volunteer_event = UpdateVolunteerEventMutation.Field()
    delete_volunteer_event = DeleteVolunteerEventMutation.Field()

    create_intern_event = CreateInternEventMutation.Field()
    update_intern_event = UpdateInternEventMutation.Field()
    delete_intern_event = DeleteInternEventMutation.Field()

    create_contact = CreateContactMutation.Field()
    update_contact = UpdateContactMutation.Field()
    delete_contact = DeleteContactMutation.Field()

    create_metro = CreateMetroMutation.Field()
    update_metro = UpdateMetroMutation.Field()
    delete_metro = DeleteMetroMutation.Field()

    create_photo = CreatePhotoMutation.Field()
    update_photo = UpdatePhotoMutation.Field()
    delete_photo = DeletePhotoMutation.Field()

    create_report = CreateReportMutation.Field()
    update_report = UpdateReportMutation.Field()
    delete_report = DeleteReportMutation.Field()

    create_shedule = CreateScheduleMutation.Field()
    update_shedule = UpdateScheduleMutation.Field()
    delete_shedule = DeleteScheduleMutation.Field()

    create_tag_event = CreateTagMutation.Field()
    update_tag_event = UpdateTagMutation.Field()
    delete_tag_event = DeleteTagMutation.Field()



