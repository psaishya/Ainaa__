from django.urls import path
# from .views import main
from .views import UserView,SignupView

urlpatterns = [
    # path('home',main)
    path('user',UserView.as_view()),
    path('signup',SignupView.as_view()),
]
