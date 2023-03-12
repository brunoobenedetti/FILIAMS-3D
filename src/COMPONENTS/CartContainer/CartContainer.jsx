import { useCartContext } from "../../context/CartContext"



export const CartContainer = () => {
    const{cartList ,vaciarCarrito,precioTotal,eliminarProducto} =useCartContext()
    return (
        <div>
            {
            cartList.map(prodCart => (
                <div className="container"> 
                    <p key={prodCart.id}>                
                        <img src={prodCart.img} className='w-25' />
                        Nombre: {prodCart.name} - 
                        cantidad: {prodCart.cantidad} - 
                        precio: {prodCart.precio}  {' '}
                        <button onClick={()=>eliminarProducto(prodCart.id)} className='btn btn-danger'>x</button>
                    </p>
                    </div>
                ))
            }
            <p>{precioTotal()==0 && `Precio Total: ${precioTotal()}`}</p>  

        <button onClick={vaciarCarrito} className='btn btn-dark'>Vaciar Carrito</button>
    </div>
    )
}


export default CartContainer