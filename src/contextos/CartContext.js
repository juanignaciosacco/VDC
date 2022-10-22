import React, { useState } from "react"

const CartContext = React.createContext()

const ItemsProvider = ({ children }) => {

    const [productosAgregados, setProductos] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

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
        setTotalItems(totalItems + producto.cantidad)
    }

    const removeItemFromCartList = (prodAQuitarId, precioProd, cantProd) => {
        const nuevaListaProductos = productosAgregados.filter(prod => prod.id !== prodAQuitarId)
        setPrecioTotal(precioTotal - (precioProd * cantProd))
        setProductos(nuevaListaProductos)
        setTotalItems(totalItems - cantProd)
    }

    const clearAllItems = () => {
        setProductos([])
        setPrecioTotal(0)
        setTotalItems(0)
    }

    return (
        <CartContext.Provider value={{ productosAgregados, precioTotal, totalItems,  addItemToCartList, removeItemFromCartList, clearAllItems }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, ItemsProvider }