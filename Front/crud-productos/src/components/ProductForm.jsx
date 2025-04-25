import React from 'react'
import { useEffect, useState } from "react"
import { createProduct } from '../api/products'
import { useNavigate } from 'react-router-dom'

export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: '',
    })

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.id) {
            const loadProduct = async () => {
                const response = await getProducts(params.id)
                setProduct(response.data)
            }
            loadProduct()
        }
    })

    const handelSubmit = async(e) => {
        e.preventDefault()
        console.log(product)
        await createProduct
        navigate('/')
    }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre del producto" onChange={(e) => setProduct({ ...product, nombre: e.target.value})} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                        Precio
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="precio" type="number" placeholder="Precio del producto" onChange={(e) => setProduct({ ...product, precio: e.target.value})} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                        Descripción
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="descripcion" placeholder="Descripción del producto" onChange={(e) => setProduct({ ...product, descripcion: e.target.value})}></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Guardar Producto
                </button>
            </form>
        </div>
    )
}