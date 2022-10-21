import React, { useState } from "react"

const CartContext = React.createContext()

const ItemsProvider = ({ children }) => {
    const [productosAgregados, setProductos] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)

    const addItemToCartList = (producto) => {
        if (productosAgregados.length === 0 ) {
            setProductos([...productosAgregados, producto])
        } else {
            let found = false
            productosAgregados.forEach((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad = prod.cantidad + producto.cantidad
                    found = true
                }
            })
            found === false && setProductos([...productosAgregados, producto])
        }
        setPrecioTotal(precioTotal + (producto.precio * producto.cantidad))
    }

    const removeItemFromCartList = (prodAQuitarId, precioProd, cantProd) => {
        const nuevaListaProductos = productosAgregados.filter(obj => obj.id !== prodAQuitarId)
        setPrecioTotal(precioTotal - (precioProd * cantProd))
        setProductos(nuevaListaProductos)
    }

    return (
        <CartContext.Provider value={{ productosAgregados, precioTotal, addItemToCartList, removeItemFromCartList }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, ItemsProvider }