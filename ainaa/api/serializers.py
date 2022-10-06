from rest_framework import serializers
from . import models
# from .models import User,Task

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User
        fields=['userId','firstName','lastName','gender','email','userName','password']
    
class TaskSerializer(serializers.ModelSerializer):
     #create=serializers.DateTimeField(format="%d-%m-%Y %H:%M:%S")
     class Meta:
        model = models.Task
        fields= ('user','title','description','type','complete')

class TimeSerializer(serializers.ModelSerializer):
     create=serializers.DateTimeField(format="%d-%m-%Y %H:%M:%S")
     class Meta:
        model = models.Task
        fields= ('id','user','title','description','type','complete','create')

class UpdatetaskSerializer(serializers.ModelSerializer):
    #  create=serializers.DateTimeField(format="%d-%m-%Y %H:%M:%S")
     class Meta:
        model = models.Task
        fields= ('id','user','complete',)


class NotificationSerializer(serializers.ModelSerializer):
#      notif_time=serializers.DateTimeField(format="%Y-%m-%d")
     class Meta:
        model = models.Notification
        fields= ('id','user','notif_title','notif_type','notifiread_status')

class NotificationtimeSerializer(serializers.ModelSerializer):
     #notif_time=serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
     class Meta:
        model = models.Notification
        fields= ('id','user','notif_title','notif_type','notif_time','notifiread_status')



