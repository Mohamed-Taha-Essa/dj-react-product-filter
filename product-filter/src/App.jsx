
import './App.css'
import ProductFilter from './components/ProductFilter'
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <div className='container'>
      <div className='row mt-5'>
          <div className='col-3 shadow'>
            <ProductFilter/>
          </div>
          <div className='col-9 border' >
            <ProductList />
          </div>

      </div>
     
    </div>
  )
}

export default App
