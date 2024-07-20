from rest_framework import serializers
from . models import Product, Category

class CategorySerialzers(serializers.ModelSerializer):
    
    class Meta:
       model =Category
       fields='__all__'



class ProductSerialzers(serializers.ModelSerializer):
    category = CategorySerialzers(read_only=True)
    class Meta:
       model =Product
       fields=('name','category','price','stock')