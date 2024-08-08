from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ProductSerialzers ,CategorySerialzers
from .models import Product ,Category
from .filters import ProductFilter
from .pagination import ProductPagination

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialzers
    filter_backends=[DjangoFilterBackend]
    filterset_class = ProductFilter
    pagination_class =ProductPagination


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialzers