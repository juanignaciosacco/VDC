import './itemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../contextos/CartContext'

const ItemCart = ({imgUrl, tipoAnimal, nombreProd, precio, cantidad, id}) => {

    const { removeItemFromCartList } = useContext(CartContext)

    const quitarProducto = () => {
        removeItemFromCartList(id, precio, cantidad)
    }

    return (
        <div className='itemCart'>
            <div className="img">
                <img src={imgUrl} alt="Imagen de proucto de carrito"/>
            </div>
            <div>
                <h3 className='m-1.5'>{nombreProd}</h3>
                <p className='m-1.5'>{tipoAnimal}</p>
                <p className='m-1.5'>Precio: ${precio}</p> 
                <p className='m-1.5'>Cantidad: {cantidad}</p>
            </div>
            <div>
                <button onClick={quitarProducto} className='btn'>Quitar</button>
            </div>
        </div>
    )
}

export default ItemCart