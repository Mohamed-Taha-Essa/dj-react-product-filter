import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api'

export const fetchProductList =async ()=>{

    const response = await axios.get(`${API_URL}/product/`)
    console.log(response)
    return response.data
}

export const fetchCategories =async ()=>{
    const response =await axios.get(`${API_URL}/category/`)
    console.log(response)

    return response.data
}