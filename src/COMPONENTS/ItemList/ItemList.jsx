


import Item from "../Item/Item"

const ItemList =({Productos}) => {

  return (
    <div className="itemList">
      {Productos.map(Producto => <Item Producto={Producto} />)}
    </div>
  )
}

export default ItemList