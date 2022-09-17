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
            password=serializer.data.get('password')
            queryset=User.objects.filter(email=email)
            if queryset.exists():
                user=queryset[0]
                user.firstName=firstName
                user.lastName=lastName
                user.gender=gender
                user.email=email
                user.password=password
                user.save(update_fields=['firstName','lastName','gender','password'])
                
            else:
                user=User(firstName=firstName,lastName=lastName,gender=gender,email=email,password=password)
                user.save()
                
            return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
        