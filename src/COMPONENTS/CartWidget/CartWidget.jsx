
import { useCartContext } from '../../context/CartContext'

import '../Navbar/Navbar.css'
const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div className='BtnCarrito'>  { cantidadTotal() > 0 && cantidadTotal() } 🛒</div>
    )
}

export default CartWidget