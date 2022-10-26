import { useState } from "react"
import Item from "../item/Item"
import './itemList.css'
import { useEffect } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')
        getDocs(itemsCollection).then((snapshot) => {
            const arrayProducts = snapshot.docs.map((prod) => ({
                id: prod.id,
                ...prod.data()
            }))
            setProductos(arrayProducts)
        })
    },[])

    return (
        <div>
            <h1>Productos</h1>
            <div className="itemList">
                {productos.map((prod) => (
                    <Item imgUrl={prod.img} nombreProd={prod.nombre} tipoAnimal={prod.tipoAnimal} stock={prod.stock} precio={prod.precio} key={prod.id} id={prod.id} />
                ))}  
            </div>
        </div>
    ) 
}

export default ItemList