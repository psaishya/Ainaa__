from django.contrib import admin
from .models import User, Task

# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    list_display= ('userId','firstName','lastName','gender','email','userName','password')
admin.site.register(User,UsersAdmin)

class UsersTask(admin.ModelAdmin):
    list_display=('user','title','description','complete','create')
admin.site.register(Task,UsersTask)
