import { useState, useEffect } from "react"
import products from '../../porductos.json'
import Item from "../item/Item"
import './itemList.css'

const ItemList = () => {

    const [productos, setProductos] = useState([])

    setTimeout(() => {
        setProductos(products)
    }, 2000)

    return (
        <div>
            <h1>Item List</h1>
            <div className="itemList">
                {productos.map((prod) => (
                    <Item imgUrl={prod.img} nombreProd={prod.nombre} tipoAnimal={prod.tipoAnimal} stock={prod.stock} precio={prod.precio} key={prod.id} />
                ))}
            </div>
        </div>
    ) 
}

export default ItemList