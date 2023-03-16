import CartList from "../CartList/CartList"
import { useCartContext } from "../../context/CartContext"



export const CartContainer = () => {

const{cartList } =useCartContext()

    return (
    <div>
            {
                cartList.map(prodCart =><CartList key={prodCart.id} prodCart={prodCart} />)
            } 
    </div>
    )
}


export default CartContainer