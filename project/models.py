from django.db import models

# Create your models here.
class Monuments(models.Model):
    id = models.IntegerField(auto_created=True, unique=True, primary_key=True)
    city = models.CharField(max_length=122)
    monument = models.CharField(max_length=122)
    price = models.CharField(max_length=10)
    image = models.CharField(max_length=10)

class Tikect(models.Model):
    id = models.IntegerField(auto_created=True, unique=True, primary_key=True)
    email = models.CharField(max_length=120)
    monumentId = models.IntegerField()
    count = models.IntegerField()
    price = models.IntegerField()
    date = models.DateField()
    shift = models.CharField(max_length=120)
    trasactionId = models.CharField(max_length=120, null=True)
    scanned = models.BooleanField(default=False)
    gender = models.CharField(max_length=20, null=True)


