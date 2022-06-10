from cmath import log
import graphene
from api.graphql.query import Query
from api.graphql.mutation import Mutation


schema = graphene.Schema(query=Query, mutation=Mutation)