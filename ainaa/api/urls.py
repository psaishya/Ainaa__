from django.urls import path
# from .views import main
from .views import UserView,SignupView,GetUser

urlpatterns = [
    # path('home',main)
    path('user',UserView.as_view()),
    path('signup',SignupView.as_view()),
    path('get-user',GetUser.as_view())
]
