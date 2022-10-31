import './cartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../contextos/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const {totalItems} = useContext(CartContext)

    return (
        <div>
            {totalItems > 0 && totalItems}
            <i className='icono'><FontAwesomeIcon icon={faCartShopping} /></i>
        </div>
    )
}

export default CartWidget