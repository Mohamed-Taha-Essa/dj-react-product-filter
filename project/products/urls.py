from django.urls import path
from .api  import ProductList ,CategoryList

urlpatterns = [
    path("product/", ProductList.as_view(), name="product-list"),
    path("category/", CategoryList.as_view(), name="category-list")

]
