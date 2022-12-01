from email.policy import default
from pickle import TRUE
from pyexpat import model
from django.db import models
# Create your models here.
class User(models.Model):
    userId=models.AutoField(primary_key=True)
    firstName=models.CharField( max_length=50,default="")
    lastName=models.CharField(max_length=50,default="")
    gender=models.CharField(max_length=10,default="")
    email=models.EmailField(max_length=50,default="")
    # username=models.CharField(max_length=50,default="",unique=False)
    userName=models.CharField( max_length=50,default="",unique=TRUE)
    password=models.CharField(max_length=20,default="")

    class Meta:
        verbose_name_plural="1. Users"
        
class Task(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    title=models.CharField(max_length=200)
    type=models.CharField(max_length=30,default="")
    description=models.TextField(null=True,blank=True)
    complete=models.BooleanField(default=False)
    create=models.DateTimeField(auto_now_add=True)

   
    def __str__(self) :
        return self.title

    class Meta:
        verbose_name_plural="2. Tasks"


class Notification(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    notif_title=models.CharField(max_length=200,null=True)
    notif_type=models.CharField(max_length=20)
    notif_time=models.DateTimeField(auto_now_add=True)
    notifiread_status=models.BooleanField(default=False)

    class Meta:
        verbose_name_plural="3. Notifications"

class Journal(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    title=models.CharField(max_length=200,unique=False)
    description=models.TextField(null=True,blank=True,unique=False)
    create=models.DateTimeField(auto_now_add=True)

   
    def __str__(self) :
        return self.title

    class Meta:
        verbose_name_plural="4. Journals"