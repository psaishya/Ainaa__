
from django.urls import path
from .views import index

urlpatterns = [
   
    path('',index),
    path('about',index),
    path('login',index),
    # path('logout',index),
    path('signup',index),
    path('test',index),
    path('dashboard',index),
    path('updateprofile',index),
    path('profile',index),
<<<<<<< HEAD
    path('addgoals',index),
    path('notification',index),
=======
    path('viewgoals',index),    
    path('addgoals',index),
    path('ainaa',index)
>>>>>>> 54249054e478822c79777a54837ac88a3a15f1ce
    # path('home/<str:username>',index),
    # path('test/<str:username>',index),
    # path('main/<str:usern>',index),
    # path('task/<str:idn>',index),
    # path('create-task',index)

]
