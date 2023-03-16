import { memo } from 'react';

import Item from "../Item/Item"
import '../ItemListContainer/ItemListContainer';

const ItemList = memo(({Products}) => {

  return (
    <div  className="itemList "  >
      {Products.map(Product => <Item key={Product.id} Produc={Product} />)}
    </div>
  )
})

export default ItemList