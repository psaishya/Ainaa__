from cgitb import lookup
from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics,status
from .serializers import UserSerializer,SignupSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
# def main(request):
#     return HttpResponse("<h1>Hello</h1>")

class UserView(generics.ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    
class GetUser(APIView):
    serializer_class=UserSerializer
    lookup_url_kwarg='userName'
    
    def get(self,request,format=None):
        userName=request.GET.get(self.lookup_url_kwarg)
        if userName!=None:
            user=User.objects.filter(userName=userName)
            if len(user)>0:
                data=UserSerializer(user[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response({'Bad Request User not found':'Invalid username'},status=status.HTTP_404_NOT_FOUND)
        
        return Response({'Bad Request':'username ko parameter not found in request'},status=status.HTTP_404_NOT_FOUND)


class SignupView(APIView):
    serializer_class=SignupSerializer
    
    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            firstName=serializer.data.get('firstName')
            lastName=serializer.data.get('lastName')
            gender=serializer.data.get('gender')
            # email=self.request.session.session_key
            x=self.request.session.session_key
            email=serializer.data.get('email')
            userName=serializer.data.get('userName')
            password=serializer.data.get('password')
            queryset=User.objects.filter(email=email)
            if queryset.exists():
                user=queryset[0]
                user.firstName=firstName
                user.lastName=lastName
                user.gender=gender
                user.email=email
                user.userName=userName
                user.password=password
                user.save(update_fields=['firstName','lastName','gender','userName','password'])
                
            else:
                user=User(firstName=firstName,lastName=lastName,gender=gender,email=email,userName=userName,password=password)
                user.save()
                
            return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
        