import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

const CartList = ({prodCart  }) => {
    const {eliminarProducto,precioTotal,vaciarCarrito}=useCartContext()
    const [datForm,setDatFrom] = useState({
        name:'',
        gmail:'',
        phone:'',
        validarGmail:''
    })
    

    const gnerarOrden = (event) =>{
        event.PreventDefault()
        const order ={}
        order.buyer = datForm
        order.precioTotal =precioTotal()
        order.Products = CartList.map(({id, name, precio})=>({id, name,precio}))

        console.log(order)

        const db = getFirestore()
        const queryCollection = collection(db,'Orders');

        addDoc(queryCollection ,order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }

    const handleOnChange = (evet) =>{
        console.log(evet.target.name)
        console.log(evet.target.value)
        setDatFrom({
            ...datForm,
            [evet.target.name]:evet.target.value
        })
}



    return (
        <div>
            <div className="container"> 
                <p key={prodCart.id}>                
                    <img src={prodCart.img} className='w-25' />
                    Nombre: {prodCart.name} - 
                    cantidad: {prodCart.cantidad} - 
                    precio: {prodCart.precio}  {' '}
                    <button onClick={()=>eliminarProducto(prodCart.id)} className='btn btn-danger'>🗑️</button>
                </p>
                <p>{precioTotal() == 0 && `Precio Total: ${precioTotal()}`}</p>  


            <div className='container d-flex justify-content aling-item-center'>
                <form className='form-group w-100' onSubmit={gnerarOrden}>

                    <input className='form-control'
                    type="text" 
                    name='name'
                    placeholder='ingresar nombre'
                    onChange={handleOnChange} 
                    required
                    value={datForm.name}
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='gmail' 
                    placeholder='ingresar gamil' 
                    onChange={handleOnChange}
                    required
                    value={datForm.gmail}
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='phone' 
                    placeholder='nnumero de celular' 
                    onChange={handleOnChange}
                    required
                    value={datForm.phone}
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='validarGmail' 
                    placeholder='Validar gmail'
                    onChange={handleOnChange} 
                    required
                    value={datForm.validarGmail}
                    >
                    </input>

                    <button onClick={()=>gnerarOrden()} className='btn btn-dark'>Generar Orden</button>
                </form>
                </div>
                <button onClick={vaciarCarrito} className='btn btn-dark'>Vaciar Carrito</button>

            </div>
        </div>
    )
}

export default CartList