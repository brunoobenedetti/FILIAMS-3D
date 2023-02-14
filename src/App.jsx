
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import ItemLisContainer from './COMPONENTS/ItemListContainer/ItemListContainer';
import Nav3D from './COMPONENTS/Navbar/Navbar';

function App() {
  

  return (
    <>
    <Nav3D/>
    <ItemLisContainer componente={Nav3D}/>
    </>
  )
}

export default App
