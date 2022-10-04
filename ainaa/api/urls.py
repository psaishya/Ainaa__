from django.urls import path
from . import views
urlpatterns = [
    # path('home',main)
    # path('user',UserView.as_view()),
    # path('signup',SignupView.as_view()),
    # path('get-user',GetUser.as_view()),
    # path('login',LoginView.as_view()),
    # path('tasks',TaskView.as_view()),
    # path('get-task',GetTask.as_view()),
    # path('create-task',TaskCreateView.as_view()),
    # #path('create-task',createTask)
    # #path('update-task',updateTask.as_view()),
    path('user/',views.UserList.as_view()),
    path('user/<int:pk>/',views.UserDetail.as_view()),
    path('userlogin',views.userlogin),
    # path('user/<slug:userName>/',views.LoggedUser.as_view()),
    path('loggeduser',views.Loggeduser),
    path('task/',views.TaskList.as_view()),
    path('tasktime/<int:pk>/',views.TaskTime.as_view()),
    path('usertask/<int:userId>',views.UserTask.as_view()),

]
