import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import {collection, getDocs, getFirestore, query, where, } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';



export const ItemLisContainer = () => {
const [products, setProducts] =useState([])
const [loading, setLoading ] = useState(true)
const {Categoriaid} = useParams()

useEffect(() =>{
    const db = getFirestore()
        const queryCollection = collection(db,'Products');
        const queryFilter =Categoriaid ? query(queryCollection , where( 'categoria', '==', Categoriaid)) : queryCollection;

        if(db){
        getDocs(queryFilter)
        .then(respCollection => setProducts(respCollection.docs.map(prodc =>({id:prodc.id, ...prodc.data() }))) )
        .catch(err => console.error(err))
        .finally( ()=>setLoading(false))
        }else {
            getDocs(queryFilter)
                .then(respCollection => setProducts(respCollection))
                .catch( err => console.error(err))
                .finally( ()=>setLoading(false))
            } 

},[Categoriaid])


    return (
        <>
        { 
        loading ?
            <>
            <Loading/>
            </>
        :
            <> 
            <ItemList Products={products}/>
            </>
        }
        </>
    )
}
