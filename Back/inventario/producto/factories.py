import factory
from factory.django import DjangoModelFactory
from producto.models import Producto
from datetime import datetime

class ProductoFactory(DjangoModelFactory):
    class Meta:
        model = Producto

    nombre = factory.Sequence(lambda n: f'Producto Test {n}')
    descripcion = factory.Faker('text')
    precio = factory.Faker('pyfloat', positive=True, min_value=1, max_value=1000)
    cantidad = factory.Faker('pyint', min_value=0, max_value=100)
    fecha_creacion = factory.LazyFunction(datetime.now)
    fecha_actualizacion = factory.LazyFunction(datetime.now)