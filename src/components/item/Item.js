import { Link } from 'react-router-dom'
import './item.css'

const Item = ({imgUrl, tipoAnimal, nombreProd, precio, cantidad, stock, id}) => {

    return (
        <div>
            {stock > 0 ? (
                <div className="item">
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                        <h3>{nombreProd}</h3>
                        <p>{tipoAnimal}</p>
                        <p>Stock: {stock}</p>
                        {cantidad != null && <p>Cantidad: {cantidad}</p>}
                        <p>${precio}</p>
                        <Link to={`/itemDetails/item/${id}`}><button>Ver detalle</button></Link>
                    </div>
                </div>
            ):(
                <div className="item item--outOfStock">
                    <p className='warning'>Sin stock!!!</p>
                    <img src={imgUrl} alt='Imagen Producto' />
                    <div className="info">
                        <h3>{nombreProd}</h3>
                        <p>{tipoAnimal}</p>
                        <p>Stock: {stock}</p>
                        {cantidad != null && <p>Cantidad: {cantidad}</p>}
                        <p>${precio}</p>
                        <Link to={`/itemDetails/item/${id}`}><button>Ver detalle</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item