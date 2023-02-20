
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';

import './App.css'

import ItemDetailContainer from './COMPONENTS/ItemDetailContainer/ItemDetailContainer';
import {ItemLisContainer} from './COMPONENTS/ItemListContainer/ItemListContainer';
import Nav3D from './COMPONENTS/Navbar/Navbar';

function App() {
  

  return (
      <BrowserRouter>
        <Nav3D/>
          <Routes>
            <Route path='/' element ={<ItemLisContainer componente={Nav3D}/>  }></Route>
            <Route path='/categoria/impresoras 3d' element ={<ItemLisContainer/>}></Route>
            <Route path='/categoria/filamentos' element ={<ItemLisContainer/>}></Route>
            <Route path='/detalle/:idProducto' element ={<ItemDetailContainer/>}></Route>
            <Route path='/cart'element = {<ItemLisContainer/>}> </Route>
            <Route path='*' element ={ <Navigate to='/'/>} ></Route>
            
          </Routes>
          
      </BrowserRouter>
  )
}

export default App