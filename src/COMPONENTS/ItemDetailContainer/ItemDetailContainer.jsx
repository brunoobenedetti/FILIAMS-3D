import {useCartContext} from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFech"
import ItemDetail from "../ItemDetail/ItemDetail"
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idProducto} =useParams()

    

    console.log(idProducto)
    useEffect(()=>{
        
        gFetch(idProducto)
        .then(resp => setProduct(resp))
    
    },[])
    return (
        <ItemDetail  product={product}/>
    )
}


export default ItemDetailContainer