
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext, { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({produc}) => {
    const [isCount, setIsCount] = useState(true)
    const {agregarCart} = useCartContext (CartContext)
    function onAdd(cantidad){
        agregarCart( { ... produc, cantidad})
        setIsCount(false)
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src={produc.img } alt='img' className="w-50" />
                    </div>
                    <div>
                        <p >Nombre: {produc.name}</p>
                        <p >Categoría: {produc.categoria}</p>
                        <p >Precio: {produc.precio}</p>
                        <p >stok:{produc.stock}</p>
                    </div>
                </div>
                <div className="col-6">
                    {isCount ?
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    :
                        <>
                        <Link  to='/cart'className='btn btn-dark'>Ir al carrito</Link>
                        <Link  to='/'className='btn btn-dark'>Segir Comprando</Link>
                        </>
                    }
                </div>
            </div>
    </div>
    )
}

export default ItemDetail