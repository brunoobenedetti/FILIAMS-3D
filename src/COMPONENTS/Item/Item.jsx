import { Link } from "react-router-dom"

export const Item = ({Producto}) => {
  return (
    <div key={Producto.id} className='card w-25 mt-3 shadow '>
                <div className='card-image'>
                    nombre: {Producto.name}
                    <img className='w-100'src={Producto.img}/>
                </div>
                <div className='card-content'> 
                    <p> {Producto.precio}</p>
                </div>
                <div className='card-footer'>
                    <Link className="btn btn-outline-dark w-100" to ={`/detalle/${Producto.id}`}>Detalle</Link>
                    
                </div>
            </div>
  )
}
export default Item
