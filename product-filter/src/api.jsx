import axios from 'axios'

API_URL = 'http://127.0.0.1:8000/api/'

export const fetchProductList = ()=>{

    const response = axios.get(`${API_URL}product/`)
    console.log(response)
    return response.data
}

export const fetchCategories = ()=>{
    const response = axios.get(`${API_URL}category/`)
    console.log(response)

    return response.data
}