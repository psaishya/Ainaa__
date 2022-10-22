
from django.urls import path
from .views import index

urlpatterns = [
   
    path('',index),
    path('about',index),
    path('login',index),
    # path('logout',index),
    path('signup',index),

    path('dashboard',index),
    path('updateprofile',index),
    path('profile',index),
 
    path('notification',index),
    path('viewgoals',index),    
    path('viewjournals',index),
    path('addgoals',index),
    path('addjournals',index),
    
    path('ainaa',index)
    # path('home/<str:username>',index),
    # path('test/<str:username>',index),
    # path('main/<str:usern>',index),
    # path('task/<str:idn>',index),
    # path('create-task',index)

]
