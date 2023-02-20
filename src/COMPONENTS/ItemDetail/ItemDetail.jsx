
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = (Product) => {
    const {agregarCart} = useCartContext ()
    function onAdd(cantidad){
        agregarCart( { ... Product, cantidad})
    }
    return (
        <div>
        <div className="row">
            <div className="col-6">
                <div>
                    <img src={Product.img} alt='img' className="w-50"></img>
                </div>
            </div>
            <div className="col-6">
                <label className="">Nombre: {Product.name}</label>
                <p> {Product.precio}</p>
            </div>
        </div>
            <div className='col-6'>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </div>
    </div>
    )
}

export default ItemDetail