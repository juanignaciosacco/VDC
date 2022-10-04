import { useState } from "react"
import Item from "../item/Item"
import './itemList.css'
import { useEffect } from "react"

const ItemList = ({id}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://apigenerator.dronahq.com/api/ZDpuc-Zi/products')
        .then((res) => res.json())    
        .then((resProd) => {
            setTimeout(() => {
                setProductos(resProd)
            }, 2000)
        }) 
    },[])

    return (
        <div>
            <div className="itemList">
                {productos.map((prod) => (
                    prod.categoria == id && <Item imgUrl={prod.img} nombreProd={prod.nombre} tipoAnimal={prod.tipoAnimal} stock={prod.stock} precio={prod.precio} key={prod.id} id={prod.id} />             
                ))}
            </div>
        </div>
    ) 
}

export default ItemList