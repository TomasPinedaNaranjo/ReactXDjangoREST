import { useEffect, useState } from "react"
import { getProducts } from "../api/products"
import { useNavigate } from "react-router-dom"

export default function ProductList({ }) {

    const [products, setProducts] = useState([])
    
    const loadProducts = async () => {
        const response = await getProducts()
        console.log(response)
        setProducts(response.data)
    }

    const navigate = useNavigate()

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold text-sky-900">Productos Disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-white">
                {products.map(product => (
                    <div key={product.id} className="bg-sky-900 shadow-md rounded-lg p-4 mb-4">
                    <p>{product.nombre}</p>
                    <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
                    <p>{product.categoria}</p>
                    <div>
                        <button className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => navigate('editar-producto' + product.id)}>Editar</button>
                        <button className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-2">Eliminar</button>
                    </div>
                    </div>
                ))}
            </div>

        </div>

    )
}