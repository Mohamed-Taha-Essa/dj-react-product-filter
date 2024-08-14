import { useEffect, useState } from "react";
import { fetchProductList } from "../api";
import { productStore } from "../store";

const ProductList =()=>{
   
  //make re-render for only products, setProducts,filters in productstor change
  const { products, setProducts,filters } = productStore((state) => ({
    products: state.products,
    setProducts: state.setProducts,
    filters :state.filters
  }));
  const [page , setPage] = useState(1)
  const [nextPage ,setnextPage] =useState(null)
  const [prevPage ,setprevPage] =useState(null)
//make re-render for every part in productstor change
//   const { products, setProducts ,filters} = productStore();
   useEffect(() => {
            // fetchProductList(filters).then(setProducts);
            const loadProducts = async ()=>{
                const response =await fetchProductList(filters,page)
                setProducts(response.results)
                
                setnextPage(response.next)
                setprevPage(response.previous)
                console.log('next',nextPage)
            }

            loadProducts()
        }, [setProducts ,filters ,page]);
  

    const handleNextPage = ()=>{
        if(nextPage) setPage(page+1)

    }
    const handlePrevPage = ()=>{
        if(prevPage) setPage(page-1)
    }
   
    return ( 
   
        <div>
            <h2>ProductList</h2>
            <div className="row">
                {console.log(products)}
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
                <div className="mt-5">
                    <button className="btn btn-primary"
                    onClick={handlePrevPage}

                    disabled={!prevPage}

                    
                    >prev</button>
                    <button className="btn btn-primary ms-2"
                    onClick={handleNextPage}
                    disabled={!nextPage}

                    >next</button>

                </div>
            
            </div>
            <div className="mt-5">
                <button className="btn btn-primary">prev</button>
                <button className="btn btn-primary">next</button>

            </div>
            
        </div> 

        );
}

export default ProductList;