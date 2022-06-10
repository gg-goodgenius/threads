from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie


urlpatterns = [
    path('', jwt_cookie(GraphQLView.as_view(graphiql=True))),
]

if settings.ADMINSITE:
    urlpatterns.append(path('admin/', admin.site.urls))
