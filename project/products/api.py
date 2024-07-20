from rest_framework import generics
from .serializers import ProductSerialzers ,CategorySerialzers
from .models import Product ,Category


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialzers


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialzers