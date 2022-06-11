import graphene
import graphql_jwt

from api.graphql.mutations.user import RegistrationUser
from api.graphql.mutations.volunteer_event import CreateVolunteerEventMutation, UpdateVolunteerEventMutation, DeleteVolunteerEventMutation
from api.graphql.mutations.intern_event import CreateInternEventMutation, UpdateInternEventMutation, DeleteInternEventMutation



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