import './ItemListContainer.css';
import React,{useEffect, useState} from 'react';

import { gFetch } from '../../utils/gFech';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


export const ItemLisContainer = () => {
const [Productos, setPrductos] =useState([])
const [loading, setLoading ] = useState(true)
const {Categoria} = useParams()
useEffect(() => {
    if(Categoria){
        gFetch()
            .then(resp => setPrductos(resp.filter(producto => producto.categoria === Categoria)))
            .catch( err =>console.log(err))
            .finally( ()=>setLoading(false))
} else {
    gFetch()
        .then(resp => setPrductos(resp))
        .catch( err =>console.log(err))
        .finally( ()=>setLoading(false))
    }
}, [Categoria])

console.log(Categoria)


    return (
        <>
        { 
        loading ?
        <h2 style={{textAlign: 'center'}}>loading....</h2>
        :
            <> 
            <ItemList productos={Productos}/>
            </>
        }
        </>
    )
}
