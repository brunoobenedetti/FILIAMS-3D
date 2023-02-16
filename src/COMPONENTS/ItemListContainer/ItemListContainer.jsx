import './itemList.css'
import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { gFetcht } from '../../utils/gFecht';



export const ItemLisContainer = () => {
const [itemList, setItemList] =useState([])
const [loading, setLoading ] = useState(true)

useEffect(() => {
    gFetcht()
        .then(resp => setItemList(resp))
        .catch( err =>console.log(err))
        .finally( ()=>setLoading(false))
}, []) 
console.log(itemList)
/* let fecha = Date(); 

const hanldeCount = () => {
    console.log(count)
    setCount(count + 1)
} */

    return (
        <>
        { 
        loading ?
        <h2>loading....</h2>
        :
        <div className='productos'>
            
            {itemList.map(item=> ( 
                <div key={item.id} className='card w-25 mt-4'>
                <div className='card-image'>
                    nombre: {item.name}
                    <img className='w-100'src={item.img}/>
                </div>
                <div className='card-content'> 
                    <p> ${item.precio}</p>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-outline-dark w-100'>Detalle </button>
                </div>
            </div>))}
        </div>
        }
        
        </>
    )
}

export default ItemLisContainer