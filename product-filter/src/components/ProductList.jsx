import { useEffect } from "react";
import { fetchProductList } from "../api";
import { productStore } from "../store";

const ProductList =()=>{
   
//    const {products ,setProducts} = productStore()
// const { products, setProducts } = productStore((state) => ({
//     products: state.products,
//     setProducts: state.setProducts,
//   }));
  const { products, setProducts } = productStore();
   useEffect(() => {
            fetchProductList().then(setProducts);
        }, [setProducts]);

   
    return ( 
   
        <div>
            <h2>ProductList</h2>
            <div className="row">
            {products.map(product =>(
                <div key={product.id} className="col-4">
                    <div  className="card ">
                        <img src={product.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
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