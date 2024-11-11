 
from django.urls import path
from . import views

urlpatterns = [
    path('upcoming/', views.upcoming_slots, name='upcoming-slots'),
]