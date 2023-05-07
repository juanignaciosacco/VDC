import './itemListContainer.css'
import ItemList from '../../components/itemList/ItemList'
import FilteredItemList from '../../components/filteredItemList/FilteredItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {productos} = useParams()
    console.log(productos)

    return (
        <div>

            {productos == 'productos' ? <ItemList destacados={false} /> : <ItemList destacados={true}/>}

            {/* {categoria !== undefined ? <FilteredItemList categoria={categoria} /> : <ItemList/>} */}
        </div>
    )
}

export default ItemListContainer