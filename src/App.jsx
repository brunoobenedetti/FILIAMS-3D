
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';

import './App.css'
import CartContainer from './COMPONENTS/CartContainer/CartContainer';

import ItemDetailContainer from './COMPONENTS/ItemDetailContainer/ItemDetailContainer';
import {ItemLisContainer} from './COMPONENTS/ItemListContainer/ItemListContainer';
import Nav3D from './COMPONENTS/Navbar/Navbar';
import { CartContextProvider } from './context/CartContext';

function App() {
  

  return (
      <BrowserRouter>
      <CartContextProvider>
        <Nav3D/>
          <Routes>
            <Route path='/' element ={<ItemLisContainer componente={Nav3D}/>  }/>
            <Route path='/categoria/:Categoriaid' element ={<ItemLisContainer/>}/>
            <Route path='/detalle/:Productoid' element ={<ItemDetailContainer/>}/>
            <Route path='*' element ={ <Navigate to='/'/>} />
            <Route path='/cart' element = { <CartContainer />} />
          </Routes>
          </CartContextProvider> 
      </BrowserRouter>
  )
}

export default App