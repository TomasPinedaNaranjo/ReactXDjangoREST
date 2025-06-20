from django.test import TestCase
from producto.factories import ProductoFactory
from producto.exceptions import (
    ProductoNombreInvalidoError,

    
    ProductoPrecioInvalidoError,
    ProductoCantidadInvalidaError
)

class ProductoTests(TestCase):
    def test_crear_producto_valido(self):
        """Test creating a valid producto"""
        producto = ProductoFactory.build()
        producto.save()
        self.assertIsNotNone(producto.id)
        
    def test_producto_nombre_invalido(self):
        """Test creating a producto with invalid name"""
        with self.assertRaises(ProductoNombreInvalidoError):
            producto = ProductoFactory.build(nombre='')
            producto.save()
            
    def test_producto_precio_invalido(self):  

        """Test creating a producto with invalid price"""
        with self.assertRaises(ProductoPrecioInvalidoError):
            producto = ProductoFactory.build(precio=-10)
            producto.save()
            
    def test_producto_cantidad_invalida(self):
        #Test creating a producto with invalid quantity


        with self.assertRaises(ProductoCantidadInvalidaError):
            producto = ProductoFactory.build(cantidad=-1)
            producto.save()