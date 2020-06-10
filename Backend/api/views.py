from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics

@api_view(['GET'])
def api_root(request, format=None):
    return Response({

			'List':'/Tasks/',
			'Create':'/Tasks/',
			'Detail View':'/Tasks/<int:pk>/',
			'Update':'/Tasks/<int:pk>/',
			'Delete':'/Tasks/<int:pk>/',
    })


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
