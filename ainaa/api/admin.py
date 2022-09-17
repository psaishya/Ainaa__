from django.contrib import admin
from .models import User

# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    list_display= ('userId','firstName','lastName','gender','email','password')
admin.site.register(User,UsersAdmin)
