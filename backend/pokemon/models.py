from django.db import models

# Create your models here.
class Pokemon(models.Model):
    pokeID = models.CharField(max_length = 200)
    name = models.CharField(max_length = 200)
    level = models.IntegerField(default = 1)
