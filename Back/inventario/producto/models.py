from django.db import models
from .exceptions import ProductoNombreInvalidoError, ProductoPrecioInvalidoError, ProductoCantidadInvalidaError
from django.core.exceptions import ValidationError

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.FloatField()
    cantidad = models.IntegerField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    def clean(self):
        if not self.nombre or len(self.nombre.strip()) == 0:
            raise ProductoNombreInvalidoError()
        
        if self.precio <= 0:
            raise ProductoPrecioInvalidoError()
        
        if self.cantidad < 0:
            raise ProductoCantidadInvalidaError()

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nombre