import { Link, useParams } from 'react-router-dom'
import './item.css'

const Item = ({imgUrl, tipoAnimal, nombreProd, precio, stock}) => {

    const mostrarDetallesEventHandler = () => {
        console.log('Hola')
    }

    // tipoAnimal podria ser tambien la categoria, en mii proyecto Canino o felino
    return (
    <div className="item">
            <img src={imgUrl} alt='Imagen Producto' />
            <div className="info">
                <h3>{nombreProd}</h3>
                <p>{tipoAnimal}</p>
                <p>{stock}</p>
                <p>{precio}</p>
                <button onClick={mostrarDetallesEventHandler}>Ver detalle</button>
            </div>
            {/* <ItemCount stock={stock} /> */}
    </div>
    )
}

export default Item