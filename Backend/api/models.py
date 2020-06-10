from django.db import models

# Create your models here.

class Product(models.Model):
  Nom = models.CharField(max_length=200)
  completed = models.BooleanField(default=False, blank=True, null=True)

  def __str__(self):
    return self.title
