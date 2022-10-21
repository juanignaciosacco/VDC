import './itemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../contextos/CartContext'

const ItemCart = ({imgUrl, tipoAnimal, nombreProd, precio, cantidad, stock, id}) => {

    const { removeItemFromCartList } = useContext(CartContext)

    const quitarProducto = () => {
        removeItemFromCartList(id, precio, cantidad)
    }

    return (
        <div className='itemCart'>
            <div className="img">
                <img src={imgUrl} />
            </div>
            <div>
                <h3>{nombreProd}</h3>
                <p>{tipoAnimal}</p>
                <p>Precio: ${precio}</p> 
                <p>Cantidad: {cantidad}</p>
            </div>
            <div>
                <button onClick={quitarProducto}>Quitar producto</button>
            </div>
        </div>
         )
}

export default ItemCart