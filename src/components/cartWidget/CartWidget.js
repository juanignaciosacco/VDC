import './cartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CartContext } from '../../contextos/CartContext'
import { useContext, useEffect, useState } from 'react'

const CartWidget = () => {

    const {totalItems} = useContext(CartContext)
    const [totalItemsCart, setTotalItmesCart] = useState(0)

    useEffect(() => {
        totalItems >= 0 && setTotalItmesCart(totalItems)
    }, [totalItems])

    return (
        <div className='flex flex-row'>
            {totalItemsCart !== 0 && totalItemsCart}
            {/* <i className='icono'><FontAwesomeIcon icon={faCartShopping} /></i> */}
            <ShoppingCartIcon className="ml-1 h-6 w-6 text-gray-400" />
        </div>
    )
}

export default CartWidget