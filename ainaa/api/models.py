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