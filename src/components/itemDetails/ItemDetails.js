import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './itemDetails.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetails = () => {

    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://apigenerator.dronahq.com/api/ZDpuc-Zi/products/${id}`)
            .then((res) => res.json())
            .then((resProd) => {
                setProducto(resProd)
            })
    },[id])

    return (
        <div className="itemsDetails">
            <img src={producto.img} alt='Imagen Producto' />
            <div className="info">
                <h3>{producto.nombre}</h3>
                <p>{producto.tipoAnimal}</p>
                <p>{producto.descripcion}</p>
                <p>Stock: {producto.stock}</p>
                <p>${producto.precio}</p>
                <ItemCount  stock={producto.stock}/>
            </div>
        </div>
        )
}

export default ItemDetails