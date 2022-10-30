import './itemListContainer.css'
import ItemList from '../../components/ItemList/ItemList'
import FilteredItemList from '../../components/FilteredItemList/FilteredItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {categoria} = useParams()

    return (
        <div>
            {categoria !== undefined ? <FilteredItemList categoria={categoria} /> : <ItemList/>}
        </div>
    )
}

export default ItemListContainer