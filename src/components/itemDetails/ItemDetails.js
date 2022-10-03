import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

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
        <div>
            <img src={producto.img} alt='Imagen Producto' />
            <div className="info">
                <h3>{producto.nombre}</h3>
                <p>{producto.tipoAnimal}</p>
                <p>{producto.descrpcion}</p>
                <p>{producto.stock}</p>
                <p>{producto.precio}</p>
                <button>Agregar a carrito</button>
            </div>
        </div>
        )
}

export default ItemDetails