from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from .serializers import UserSerializer
from . import models
# Create your views here.
class UserList(generics.ListCreateAPIView):
    queryset=models.User.objects.all() 
    serializer_class=UserSerializer
    # permission_classes=[permissions.IsAuthenticated]

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.User.objects.all() 
    serializer_class=UserSerializer
    # permission_classes=[permissions.IsAuthenticated]

@csrf_exempt   
def userlogin(request):
    userName=request.POST["userName"]
    password=request.POST["password"]
    queryset=models.User.objects.all() 
    userdata=queryset.filter(userName=userName,password=password)
    # userdata =models.User.objects.get(userName=userName,password=password)
    if userdata:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})