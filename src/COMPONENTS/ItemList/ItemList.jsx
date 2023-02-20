

import Item from "../Item/Item"

const ItemList =({Productos}) => {

  return (
    <div  className="justify-content-center align-item-center"  >
      {Productos.map(Producto => <Item Producto={Producto} />)}
    </div>
  )
}

export default ItemList