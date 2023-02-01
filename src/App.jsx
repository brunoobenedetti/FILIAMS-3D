
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import ComponenteContainer from './COMPONENTS/componenteContainer/ComponenteContainer';
import Nav3D from './COMPONENTS/Navbar/Navbar';


let titulo='Hola soy Titulo de componetContainer'

function App() {
  

  return (
    <>
    <Nav3D/>
    <ComponenteContainer titulo={titulo}/>
    </>
  )
}

export default App
