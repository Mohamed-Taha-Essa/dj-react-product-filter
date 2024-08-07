from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='product_category', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    image =models.ImageField(upload_to='product', null=True ,blank=True)
    def __str__(self):
        return self.name

#PS1='\[\033]0;$TITLEPREFIX:$PWD\007\033[32m\]\u@\h \[\033[35m\w\033[32m\]>\[\033[0m\] '
