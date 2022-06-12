from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', jwt_cookie(csrf_exempt(GraphQLView.as_view(graphiql=True)))),
]

if settings.ADMINSITE:
    urlpatterns.append(path('admin/', admin.site.urls))
