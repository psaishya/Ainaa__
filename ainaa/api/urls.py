from django.urls import path
# from .views import main
from .views import GetTask, UserView,SignupView,GetUser,TaskView,LoginView

urlpatterns = [
    # path('home',main)
    path('user',UserView.as_view()),
    path('signup',SignupView.as_view()),
    path('get-user',GetUser.as_view()),
    path('login',LoginView.as_view()),
    path('tasks',TaskView.as_view()),
    path('get-task',GetTask.as_view()),
  
]
