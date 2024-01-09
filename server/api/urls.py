from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name = "dashboard"),
    path('movie-add', views.addMovie, name = 'add'),
    path('movie-detail/<str:pk>/', views.movieDetail, name = 'display'),
    path('movie-update/<str:pk>/', views.movieUpdate, name = 'update'),
    path('movie-delete/<str:pk>/', views.movieDelete, name = 'delete'),
]