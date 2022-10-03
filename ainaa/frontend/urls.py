
from django.urls import path
from .views import index

urlpatterns = [
   
    path('',index),
    path('about',index),
    path('login',index),
    path('logout',index),
    path('signup',index),
    path('test',index),
    path('homepage',index),
    path('updateprofile',index),
    path('profile',index),
    # path('home/<str:username>',index),
    # path('test/<str:username>',index),
    # path('main/<str:usern>',index),
    # path('task/<str:idn>',index),
    # path('create-task',index)

]
