import { useEffect } from "react";
import { fetchProductList } from "../api";
import { productStore } from "../store";

const ProductList =()=>{
   
  //make re-render for only products, setProducts,filters in productstor change
  const { products, setProducts,filters } = productStore((state) => ({
    products: state.products,
    setProducts: state.setProducts,
    filters :state.filters
  }));
//make re-render for every part in productstor change
//   const { products, setProducts ,filters} = productStore();
   useEffect(() => {
            fetchProductList(filters).then(setProducts);
        }, [setProducts ,filters]);

   
    return ( 
   
        <div>
            <h2>ProductList</h2>
            <div className="row">
            {products.map((product ,index) =>(
                <div key={index} className="col-4">
                    <div  className="card">
                        <img src={product.image} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p>{product.price}</p>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary">Add To Cart</a>
                        </div>
                     </div>
                </div>
                ))}
            
            </div>
        </div> 

        );
}

export default ProductList;