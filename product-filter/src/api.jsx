import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api'

export const fetchProductList =async (filters)=>{

    const cat_ids = filters.categories.join(',')
    const price_min = filters.priceRange[0]
    const price_max =filters.priceRange[1]

    const params={
        categories : cat_ids ,
        price_min  : price_min,
        price_max  : price_max
    }
//http://127.0.0.1:8000/api/product/?min_price=&max_price=&categories=1%2C2
    const response = await axios.get(`${API_URL}/product/`,{params})
    console.log(response)
    return response.data
}

export const fetchCategories =async ()=>{
    const response =await axios.get(`${API_URL}/category/`)
    console.log(response)

    return response.data
}