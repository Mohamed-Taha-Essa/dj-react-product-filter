from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')
    categories = filters.BaseInFilter(field_name="category__id", lookup_expr='in')

    #categories = filters.CharFilter(method='filter_by_categories')


    class Meta:
        model = Product
        fields = ['min_price', 'max_price', 'categories']

    #apply multiple categories
    # def filter_by_categories(self, queryset, name, value):
    #         category_ids = value.split(',')
    #         return queryset.filter(category__id__in=category_ids)