
import { useCartContext } from '../../context/CartContext'

const CartList = ({prodCart  }) => {
    const {eliminarProducto}=useCartContext()
    



    return (
        <div>
            <div className="container"> 
                <p key={prodCart.id}>                
                    <img src={prodCart.img} className='w-25' />
                    Nombre: {prodCart.name} - 
                    cantidad: {prodCart.cantidad} - 
                    precio: {prodCart.precio}  {' '}
                    <button onClick={()=>eliminarProducto(prodCart.id)} className='btn btn-danger'>🗑️</button>
                </p>
                

            </div>
        </div>
    )
}

export default CartList