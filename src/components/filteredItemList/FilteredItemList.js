import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Item from '../item/Item';
import '../itemList/itemList.css'

const FilteredItemList = ({categoria}) => {

    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsFiltrados = collection(db, 'productos')
        getDocs(itemsFiltrados).then((snapshot) => {
            const arrayItems = snapshot.docs.map((prod) => ({
                id: prod.id,
                ...prod.data()
            }))
            setProductosFiltrados(arrayItems)
        })
    },[])

    return (
        <div className="itemList">
            <h1 className='text-4xl'>Productos</h1>
            {productosFiltrados.map((prod) => (
                <Item imgUrl={prod.imgUrl} nombreProd={prod.Nombre} stock={prod.Stock} precio={prod.Precio} key={prod.id} id={prod.id} />
            ))}
        </div>
    )
}

export default FilteredItemList