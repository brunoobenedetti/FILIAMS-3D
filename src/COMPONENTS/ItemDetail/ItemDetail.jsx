import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = (product) => {
    const {agregarCart} = useCartContext ()
    function onAdd(cantidad){
        agregarCart( { ... product, cantidad})
    }
  return (
    <div>
    <div className="row">
        <div className="col-6">
            <div>
                <img src={product.img} alt='img' className="w-50"></img>
            </div>
        </div>
        <div className="col-6">
            <label className="">Nombre: {product.name}</label>
            <p> {product.precio}</p>
        </div>
    </div>
    <ItemCount initial={1} stock={10} onAdd={onAdd}/>

</div>
  )
}

export default ItemDetail