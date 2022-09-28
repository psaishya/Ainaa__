from cgitb import lookup
from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics,status
from .serializers import UserSerializer,SignupSerializer,TaskSerializer
from .models import User,Task
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

# class LoginView(APIView):
#     def post(self,request,format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()
        
#         userName=request.data.get('userName')
#         password=request.data.get('password')
#         if(userName!=None):
#             user_unc=User.objects.filter(userName=userName)
#             if len(user_unc)>0:
#                 user_pwc=User.objects.filter(password=password)
#                 if len(user_pwc)>0:
#                     user=user_pwc[0]
#                     self.request.session['logged_user']=userName
#                     # return Response(user,status=status.HTTP_200_OK)
#                     return Response({'message':'You are successfully logged in'},status=status.HTTP_200_OK)
                
#                 return Response({'Bad Request':'Password did not match'},status=status.HTTP_400_BAD_REQUEST) 
             
#             return Response({'Bad Request':'invalid username'},status=status.HTTP_400_BAD_REQUEST)
        
#         return Response({'Bad Request':'invalid post data didnot find user'},status=status.HTTP_400_BAD_REQUEST)
        
class LoginView(APIView):
    lookup_url_kwarg='userName'

    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        userName = request.data.get(self.lookup_url_kwarg)
        # password=request.data.get('password')
        if(userName!=None):
            user_unc=User.objects.filter(userName=userName)
            if len(user_unc)>0:
                user=user_unc[0]
                self.request.session['logged_user']=userName
                return Response(user,status=status.HTTP_200_OK)
                # return Response({'message':'You are successfully logged in'},status=status.HTTP_200_OK)
                
                # return Response({'Bad Request':'Password did not match'},status=status.HTTP_400_BAD_REQUEST) 
             
            return Response({'Bad Request':'invalid username'},status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'Bad Request':'invalid post data didnot find user'},status=status.HTTP_400_BAD_REQUEST)
                
    
    
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
                self.request.session['logged_user']=User.userName
                return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
            
            else:
                user=User(firstName=firstName,lastName=lastName,gender=gender,email=email,userName=userName,password=password)
                user.save()
                self.request.session['logged_user']=User.userName
                return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
            
        return Response({'Bad Request':'invalid data'},status=status.HTTP_400_BAD_REQUEST)
        
class TaskView(generics.ListAPIView):
    serializer_class=TaskSerializer
    queryset=Task.objects.all()

class GetTask(APIView):
    serializer_class=TaskSerializer
    lookup_url_kwarg='id'
    
    def get(self,request,format=None):
        id=request.GET.get(self.lookup_url_kwarg)
        if id!=None:
            task=Task.objects.filter(id=id)
            if len(task)>0:
                data=TaskSerializer(task[0]).data
                return Response(data,status=status.HTTP_200_OK)
            return Response({'Bad Request User not found':'Invalid username'},status=status.HTTP_404_NOT_FOUND)
        
        return Response({'Bad Request':'username ko parameter not found in request'},status=status.HTTP_404_NOT_FOUND)