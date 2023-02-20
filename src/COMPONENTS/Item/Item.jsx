import { Link } from "react-router-dom"

export const Item = ({producto}) => {
  return (
    <div key={Producto.id} className='card w-25 mt-3 shadow '>
                <div className='card-image'>
                    nombre: {Producto.name}
                    <img className='w-100'src={producto.img}/>
                </div>
                <div className='card-content'> 
                    <p> {Producto.precio}</p>
                </div>
                <div className='card-footer'>
                    <Link to ={'/detalle/${producto.id}'}></Link>
                    <button className="btn btn-outline-dark w-100"> </button>
                </div>
            </div>
  )
}
export default Item
