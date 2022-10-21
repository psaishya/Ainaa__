from ast import Delete
from subprocess import IDLE_PRIORITY_CLASS
from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from .serializers import NotificationSerializer, UserSerializer,TaskSerializer,TimeSerializer,NotificationtimeSerializer,UpdatetaskSerializer,JournalSerializer,JTimeSerializer,UpdatejournalSerializer
from . import models
from rest_framework.pagination import PageNumberPagination
# Create your views here.

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 1

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

class JournalList(generics.ListCreateAPIView):
    queryset=models.Journal.objects.all() 
    serializer_class=JournalSerializer

class JTime(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Journal.objects.all() 
    serializer_class=UpdatejournalSerializer

class UserJournal(generics.ListCreateAPIView):
    serializer_class=JTimeSerializer
    pagination_class=StandardResultsSetPagination
    
    def get_queryset(self):
        userId=self.kwargs['userId']
        user=models.User.objects.get(pk=userId)
        return models.Journal.objects.filter(user=user)
    

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


class NotificationTime(generics.ListAPIView):
    queryset=models.Notification.objects.all()
    serializer_class=NotificationtimeSerializer

    def get_queryset(self):
        user_id=self.kwargs['user_id']
        user=models.User.objects.get(pk=user_id)
        models.Notification.objects.filter(user=user).update(notifiread_status=True)
        return models.Notification.objects.filter(user=user)

class Notificationdelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Notification.objects.all()
    serializer_class=NotificationtimeSerializer

        
