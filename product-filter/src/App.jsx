
import './App.css'
import ProductFilter from './components/ProductFilter'
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <div className='container'>
      <div className='row mt-5'>
          <div className='col-4 shadow'>
            <ProductFilter/>
          </div>
          <div className='col-8 border' >
            <ProductList />
          </div>

      </div>
     
    </div>
  )
}

export default App
