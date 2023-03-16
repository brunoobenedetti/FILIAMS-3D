import CartList from "../CartList/CartList"
import { useCartContext } from "../../context/CartContext"
import From from "../from/From"



export const CartContainer = () => {
    const{cartList } =useCartContext()
    return (
    <div>
        {
                cartList.map(prodCart =><CartList key={prodCart.id} prodCart={prodCart} />)
                
            } 
            <From/>
    </div>
    
    )
}


export default CartContainer