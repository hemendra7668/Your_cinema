from django.urls import path
from .views import RegisterAPIView, LoginAPIView

urlpatterns = [
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    # path('booking', BookingAPIView.as_view()),

]
