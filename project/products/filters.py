from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
    price_min = filters.NumberFilter(field_name="price", lookup_expr='gte')
    price_max = filters.NumberFilter(field_name="price", lookup_expr='lte')
    categories = filters.BaseInFilter(field_name="category__id", lookup_expr='in')

    #categories = filters.CharFilter(method='filter_by_categories')


    class Meta:
        model = Product
        fields = ['price_min', 'price_max', 'categories']

    #apply multiple categories
    # def filter_by_categories(self, queryset, name, value):
    #         category_ids = value.split(',')
    #         return queryset.filter(category__id__in=category_ids)