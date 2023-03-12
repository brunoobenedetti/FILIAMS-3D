
import '../ItemListContainer/ItemListContainer';
import Item from "../Item/Item"

const ItemList =({Products}) => {

  return (
    <div  className="itemList"  >
      {Products.map(Product => <Item key={Product.id} Produc={Product} />)}
    </div>
  )
}

export default ItemList