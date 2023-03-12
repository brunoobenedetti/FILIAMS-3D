
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext, { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const [isCount, setIsCount] = useState(true)
    const {agregarCart} = useCartContext (CartContext)
    function onAdd(cantidad){
        agregarCart( { ... product, cantidad})
        setIsCount(false)
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src={product.img } alt='img' className="w-50" />
                    </div>
                    <div>
                        <p className="" >Nombre: {product.name}</p>
                        <p className="" >Categoría: {product.categoria}</p>
                        <p className="" >Precio: {product.precio}</p>
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