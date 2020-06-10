from django.urls import path
from . import views


urlpatterns = [
	path('', views.api_root),
    path('Products/', views.ProductList.as_view()),
    path('Products/<int:pk>/', views.ProductDetail.as_view()),
]
