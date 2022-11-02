import './cartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../contextos/CartContext'
import { useContext, useEffect, useState } from 'react'

const CartWidget = () => {

    const {totalItems} = useContext(CartContext)
    const [totalItemsCart, setTotalItmesCart] = useState(0)

    useEffect(() => {
        totalItems > 0 && setTotalItmesCart(totalItems)
    }, [totalItems])

    return (
        <div>
            {totalItemsCart !== 0 && totalItemsCart}
            <i className='icono'><FontAwesomeIcon icon={faCartShopping} /></i>
        </div>
    )
}

export default CartWidget