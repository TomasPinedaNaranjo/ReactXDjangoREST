from rest_framework.exceptions import ValidationError

class ProductoError(ValidationError):
    """Base error class for Producto related errors"""
    pass

class ProductoNombreInvalidoError(ProductoError):
    """Raised when producto name is invalid"""
    default_detail = "El nombre del producto no es válido"
    default_code = "producto_nombre_invalido"



class ProductoPrecioInvalidoError(ProductoError):


    
    """Raised when producto price is invalid"""
    default_detail = "El precio del producto debe ser mayor a 0"
    default_code = 'producto_precio_invalido'


class ProductoCantidadInvalidaError(ProductoError):
    """Raised when producto quantity is invalid"""
    default_detail = 'La cantidad del producto debe ser mayor o igual a 0'
    default_code = 'producto_cantidad_invalida'

