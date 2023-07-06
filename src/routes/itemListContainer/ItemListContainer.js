import ItemList from '../../components/itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {productos} = useParams()
    console.log(productos)

    return (
        <div>
            {productos === 'productos' ? <ItemList destacados={false} /> : <ItemList destacados={true}/>}
        </div>
    )
}

export default ItemListContainer