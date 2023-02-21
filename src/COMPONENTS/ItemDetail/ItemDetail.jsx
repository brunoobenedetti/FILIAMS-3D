
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const {agregarCart} = useCartContext ()
    function onAdd(cantidad){
        agregarCart( { ... product, cantidad})
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src={product.img} alt='img' className="w-50" />
                    </div>
                    <div>
                        <p className="" >Nombre: {product.name}</p>
                        <p className="" >Categoría: {product.categoria}</p>
                        <p className="" >Precio: {product.precio}</p>
                    </div>
                </div>
                <div className="col-6">
                    <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                </div>
            </div>
    </div>
    )
}

export default ItemDetail