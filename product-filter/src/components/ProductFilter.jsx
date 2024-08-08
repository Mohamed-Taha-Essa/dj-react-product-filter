import { productStore } from "../store";
import { fetchCategories } from "../api";
import { useEffect } from "react";

const ProductFilter =()=>{
   
   const {categories ,setCategories} =productStore();

   useEffect(()=>{
        fetchCategories().then(setCategories);
   },[])
    return ( 
    <div >
         
        <h2>Product Filter</h2>
       <div className="mt-5">
            <h2>Category</h2>
            {categories.map(cat => (
                    <div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label htmlFor="" className="form-check-label">{cat.name}</label>
                        </div>  
                    </div>
                ))}
       </div>
       <div className="mt-5">
            <h2>Price</h2>
            <div className="row">
                <div className="col">
                    <input type="number" name="" className="form-control" placeholder="min-price"/>
                </div>

                <div className="col">
                    <input type="number" name="" className="form-control" placeholder="max-price" />
                </div>            
            </div>

       </div>
    </div> 

        );
}

export default ProductFilter;