from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from .serializers import NotificationSerializer, UserSerializer,TaskSerializer,TimeSerializer,UpdatetaskSerializer
from . import models
# Create your views here.

#this view is for all the user details
class UserList(generics.ListCreateAPIView):
    queryset=models.User.objects.all() 
    serializer_class=UserSerializer
    # permission_classes=[permissions.IsAuthenticated]

#this view is for individual user detail 
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.User.objects.all() 
    serializer_class=UserSerializer
    # permission_classes=[permissions.IsAuthenticated]

#this view is for login -checking username and password and returning true or not
@csrf_exempt   
def userlogin(request):
    userName=request.POST["userName"]
    password=request.POST["password"]
    queryset=models.User.objects.all() 
    try:
        userdata=queryset.filter(userName=userName,password=password)
    # userdata =models.User.objects.get(userName=userName,password=password)
    except models.User.DoesNotExist:
        userdata=None
    if userdata:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
 
#this view is for getting id of the logged user
@csrf_exempt     
def Loggeduser(request):
    queryset=models.User.objects.all() 
    userName=request.POST["userName"]
    userdata=queryset.filter(userName=userName)
    if userdata:
        # return JsonResponse(userdata,safe=false)
        return JsonResponse({'id':userdata[0].userId})

#this view is for listing all the tasks
class TaskList(generics.ListCreateAPIView):
    queryset=models.Task.objects.all() 
    serializer_class=TaskSerializer


class TaskTime(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Task.objects.all() 
    serializer_class=UpdatetaskSerializer

#this view is for getting tasks of individual user
class UserTask(generics.ListCreateAPIView):
    serializer_class=TimeSerializer

    def get_queryset(self):
        userId=self.kwargs['userId']
        user=models.User.objects.get(pk=userId)
        return models.Task.objects.filter(user=user)

class NotificationList(generics.ListCreateAPIView):
    queryset=models.Notification.objects.all()
    serializer_class=NotificationSerializer

    def get_queryset(self):
        user_id=self.kwargs['user_id']
        user=models.User.objects.get(pk=user_id)
        models.Notification.objects.filter(user=user).update(notifiread_status=True)
        return models.Notification.objects.filter(user=user)
        
