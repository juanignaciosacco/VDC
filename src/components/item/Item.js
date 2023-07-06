import { Link } from 'react-router-dom'
import './item.css'

const Item = ({imgUrl, nombreProd, precio, cantidad, stock, id}) => {

    return (
        <div>
            {stock > 0 ? (
                <div className="item">
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                            <h3>{nombreProd}</h3>
                            <p>Stock: {stock}</p>
                            {cantidad != null && <p className='m-1.5'>Cantidad: {cantidad}</p>}
                            <p className='m-1.5'>${precio}</p>
                            <Link className='m-1.5' to={`/itemDetails/item/${id}`}><button className='btn'>Ver detalle</button></Link>
                    </div>
                </div>
            ):(
                <div className="item item--outOfStock">
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                    <p className='warning'>Sin stock!!!</p>
                        <h3 className='m-1.5'>{nombreProd}</h3>
                        <p>Stock: SIN STOCK!!</p>
                        {cantidad != null && <p>Cantidad: {cantidad}</p>}
                        <p>${precio}</p>
                        <Link to={`/itemDetails/item/${id}`}><button className='btn'>Ver detalle</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item