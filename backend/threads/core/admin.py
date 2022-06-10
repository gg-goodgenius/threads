from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from core.models import User

class cUserAdmin(UserAdmin):
    fieldsets = (('Основная информация', {'fields': ('email', 'password')}),
                 ('Персональные данные', {'fields': ('last_name', 'first_name', 'middle_name')}),
                 ('Права', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
                 ('Важные данные', {'fields': ('last_login', 'date_joined')}))
    add_fieldsets = ((None, {'classes': ('wide',), 'fields': ('email', 'password1', 'password2')}),)
    list_display = ('email', 'last_name', 'first_name', 'middle_name', 'is_staff')
    ordering = ['email']


admin.site.register(User, cUserAdmin)