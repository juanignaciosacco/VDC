import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Item from '../item/Item';
import '../itemList/itemList.css'

const FilteredItemList = ({categoria}) => {

    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsFiltrados = collection(db, 'items')
        const q = query(itemsFiltrados, where('categoria', '==', categoria))
        getDocs(q).then((snapshot) => {
            const arrayItems = snapshot.docs.map((prod) => ({
                id: prod.id,
                ...prod.data()
            }))
            setProductosFiltrados(arrayItems)
        })
    },[categoria])

    return (
        <div className="itemList">
            <h1>{categoria}</h1>
            {productosFiltrados.map((prod) => (
                <Item imgUrl={prod.img} nombreProd={prod.nombre} tipoAnimal={prod.tipoAnimal} stock={prod.stock} precio={prod.precio} key={prod.id} id={prod.id} />
            ))}
        </div>
    )
}

export default FilteredItemList