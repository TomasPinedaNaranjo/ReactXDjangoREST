import axios from 'axios';

const productsApi = axios.create({
    baseURL: 'http://localhost:8000/api/productos/',
})

export const getProducts = () => productsApi.get('/')

export const createProduct = (product) => productsApi.post('/', product)