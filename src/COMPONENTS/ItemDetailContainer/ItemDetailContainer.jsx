

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFech"
import ItemDetail from "../ItemDetail/ItemDetail"
export const ItemDetailContainer = () => {
    const [Product, setProduct] = useState({})
    const [loading, setLoading ] = useState(true)
    const {Productoid} =useParams()

    

    console.log(Productoid)
    useEffect(()=>{
        
        gFetch(Productoid)
        .then(resp => setProduct(resp))
        .finally( ()=>setLoading(false))
    
    },[])
    return (
        <>
        {loading ?
            <h2 style={{textAlign: 'center'}}>loading....</h2>
            :
        
            <ItemDetail  product={Product}/>
        }
        </>

    )
}


export default ItemDetailContainer