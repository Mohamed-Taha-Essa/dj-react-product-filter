from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ProductSerialzers ,CategorySerialzers
from .models import Product ,Category
from .filters import ProductFilter


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialzers
    filter_backends=[DjangoFilterBackend]
    filterset_class = ProductFilter


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialzers