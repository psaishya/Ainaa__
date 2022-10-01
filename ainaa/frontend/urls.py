
from django.urls import path
from .views import index

urlpatterns = [
   
    path('',index),
    path('login',index),
    path('signup',index),
    path('test2',index),
    path('home/<str:username>',index),
    path('test/<str:username>',index),
    path('main/<str:usern>',index),
    path('task/<str:idn>',index),
    path('create-task',index),
    path('home',index)
]
