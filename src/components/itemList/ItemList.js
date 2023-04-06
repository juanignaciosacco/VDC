import { useState } from "react"
import Item from "../item/Item"
import './itemList.css'
import { useEffect } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemList = ({destacados}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'productos')
        getDocs(itemsCollection).then((snapshot) => {
            const arrayProducts = snapshot.docs.map((prod) => ({
                id: prod.id,
                ...prod.data()
            }))
            setProductos(arrayProducts)
        })
    },[])

    return (
        <div>{destacados ? 
        (<div>
            <h1 className="text-4xl">Productos Destacados</h1>
            <div className="itemList">
                {productos.map((prod) => prod.Destacado && <Item imgUrl={prod.imgUrl} nombreProd={prod.Nombre} tipoAnimal={prod.tipoAnimal} stock={prod.Stock} precio={prod.Precio} key={prod.id} id={prod.id} />)}
            </div>
            </div>): 
            (<div className="itemList">
                <h1 className="text-4xl">Productos</h1>
                {productos.map((prod) => <Item imgUrl={prod.imgUrl} nombreProd={prod.Nombre} tipoAnimal={prod.tipoAnimal} stock={prod.Stock} precio={prod.Precio} key={prod.id} id={prod.id} />)}
            </div>)
            }
        </div>
    ) 
}

export default ItemList