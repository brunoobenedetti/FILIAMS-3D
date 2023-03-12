
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

export const ItemDetailContainer = () => {
    const [Product, setProduct] = useState({});
    const [loading, setLoading ] = useState(true);
    const {Productid} =useParams();
    


    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'Products', Productid)
            getDoc(queryDoc)
                .then(respProd => setProduct( { id: respProd.id, ...respProd.data ()}))
                .catch(err => console.error(err))
                .finally(()=> setLoading(false))
    },[])
    return (
        <>
        {
        loading ?
            <>  
                <Loading/>
            </>
            :
            <>
                <ItemDetail  produc={Product}/> 
            </>
        }
        </>
    )
}


export default ItemDetailContainer