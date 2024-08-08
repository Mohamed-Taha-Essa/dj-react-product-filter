import { productStore } from "../store";
import { fetchCategories } from "../api";
import { useEffect } from "react";

const ProductFilter =()=>{
   
//    const {categories ,setCategories , filters} =productStore();

   const { categories, setCategories,filters } = productStore((state) => ({
    categories: state.categories,
    setCategories: state.setCategories,
    filters :state.filters
  }));


   useEffect(()=>{
        fetchCategories().then(setCategories);
   },[])

   const handleCategory = (e)=>{
        const {value ,checked}  = e.target
        console.log(value ,checked)

   }

   const handlePrice = (e)=>{
    const {name ,checked}  = e.target
    console.log(name ,checked)
    }



    return ( 
    <div >
         
        <h2>Product Filter</h2>
       <div className="mt-5">
            <h2>Category</h2>
            {categories.map((cat,index) => (
                    <div key={cat.id} >
                        <div   className="form-check">
                            <input type="checkbox" 
                                className="form-check-input"
                                id={cat.id}
                                value={cat.id}
                                onChange={handleCategory}
                            />
                            <label htmlFor={cat.id} className="form-check-label">{cat.name}</label>
                        </div>  
                    </div>
                ))}
       </div>
       <div className="mt-5">
            <h2>Price</h2>
            <div className="row">
                <div className="col">
                    <input type="number" name="" 
                        className="form-control" 
                        placeholder="min-price"
                        value={filters.priceRange[0]}
                        onChange={handlePrice}

                    
                    />
                </div>

                <div className="col">
                    <input type="number" name="" 
                        className="form-control" 
                        placeholder="max-price"
                        value={filters.priceRange[1]}
                        onChange={handlePrice}

                    />
                </div>            
            </div>

       </div>
    </div> 

        );
}

export default ProductFilter;