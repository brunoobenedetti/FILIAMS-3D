import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../utils/gFech';
import ItemList from '../ItemList/ItemList';



export const ItemLisContainer = () => {
const [productos, setPrductos] =useState([])
const [loading, setLoading ] = useState(true)
const {Categoriaid} = useParams()
useEffect(() => {
    if(Categoriaid){
        gFetch()
            .then(resp => setPrductos(resp.filter(producto => producto.categoria === Categoriaid)))
            .catch( err =>console.log(err))
            .finally( ()=>setLoading(false))
} else {
    gFetch()
        .then(resp => setPrductos(resp))
        .catch( err =>console.log(err))
        .finally( ()=>setLoading(false))
    }
}, [Categoriaid])

console.log(Categoriaid)


    return (
        <>
        { 
        loading ?
        <h2 style={{textAlign: 'center'}}>loading....</h2>
        :
            <> 
            <ItemList Productos={productos}/>
            </>
        }
        </>
    )
}
