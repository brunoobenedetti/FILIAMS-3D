import { memo } from "react"
import { Link } from "react-router-dom"

export const Item = memo(({Produc}) => {
    return (
        <div key={Produc.id} className='card w-25 mt-5 shadow  '>
            <div className="card-header">
                {Produc.name}
            </div>
            <div className='card-body'>
                <img className='w-100'src={Produc.img}/>
            </div>
            <div className='card-content'> 
                <p> {Produc.precio}$</p>
            </div>
            <div className='card-footer'>
                <Link to ={`/detalle/${Produc.id}`}>
                    <button className="btn btn-outline-dark w-100" >Detalle</button>
                </Link>
                
            </div>
        </div>
    )
})
export default Item
