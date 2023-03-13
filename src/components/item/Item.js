import { Link } from 'react-router-dom'
import './item.css'

const Item = ({imgUrl, tipoAnimal, nombreProd, precio, cantidad, stock, id}) => {

    return (
        <div>
            {stock > 0 ? (
                <div className="item">
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                        <h3 className='m-1.5'>{nombreProd}</h3>
                        <p className='m-1.5'>{tipoAnimal}</p>
                        <p className='m-1.5'>Stock: {stock}</p>
                        {cantidad != null && <p className='m-1.5'>Cantidad: {cantidad}</p>}
                        <p className='m-1.5'>${precio}</p>
                        <Link className='m-1.5' to={`/itemDetails/item/${id}`}><button className='px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full'>Ver detalle</button></Link>
                    </div>
                </div>
            ):(
                <div className="item item--outOfStock">
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                    <p className='warning'>Sin stock!!!</p>
                        <h3>{nombreProd}</h3>
                        <p>{tipoAnimal}</p>
                        <p>Stock: {stock}</p>
                        {cantidad != null && <p>Cantidad: {cantidad}</p>}
                        <p>${precio}</p>
                        <Link to={`/itemDetails/item/${id}`}><button className='px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full bg-slate-200 hover:bg-slate-600 text-black-100 shadow-slate-400/30'>Ver detalle</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item