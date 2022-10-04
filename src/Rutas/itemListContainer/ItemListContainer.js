import './itemListContainer.css'
import ItemList from '../../components/itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Productos</h1>
            <ItemList id={id} />
        </div>
    )
}

export default ItemListContainer