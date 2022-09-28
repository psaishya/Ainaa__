from rest_framework import serializers

from .models import User,Task

class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = ('userId','firstName','lastName','gender','email','userName','password',)
       
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
       model= User 
       fields = ('firstName','lastName','gender','email','userName','password') 

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields= ('user','title','description','complete','create')