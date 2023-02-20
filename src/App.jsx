
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';

import './App.css'
import ItemCount from './COMPONENTS/ItemCount/ItemCount';
import ItemDetailContainer from './COMPONENTS/itemDetailContainer/itemDetailContainer';
import {ItemLisContainer} from './COMPONENTS/ItemListContainer/ItemListContainer';
import Nav3D from './COMPONENTS/Navbar/Navbar';

function App() {
  

  return (
      <BrowserRouter>
        <Nav3D/>
          <Routes>
            <Route path='/' element ={<ItemLisContainer componente={Nav3D}/>    }></Route>
            <Route path='/categoria/impresoras 3d' element ={<ItemLisContainer/>}></Route>
            <Route path='/categoria/filamentos' element ={<ItemLisContainer/>}></Route>
            <Route path='/detalle/:idProducto' element ={<ItemDetailContainer/>}></Route>
            <Route path='/cart'element = {<ItemLisContainer/>}> </Route>
            <Route path='*' element ={ <Navigate to='/'/>} ></Route>
            
          </Routes>
          <ItemCount initial= {1} stock={10} onAdd={() =>{}}/>
      </BrowserRouter>
  )
}

export default App