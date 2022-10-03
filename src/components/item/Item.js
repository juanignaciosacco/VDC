import { Link } from 'react-router-dom'
import './item.css'

const Item = ({imgUrl, tipoAnimal, nombreProd, precio, stock, id}) => {

    return (
        <div className="item">
                <img src={imgUrl} alt='Imagen Producto' />
                <div className="info">
                    <h3>{nombreProd}</h3>
                    <p>{tipoAnimal}</p>
                    <p>{stock}</p>
                    <p>{precio}</p>
                    <button><Link to={`/itemDetails/${id}`}>Ver detalle</Link></button>
                </div>
        </div>
    )
}

export default Item