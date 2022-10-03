import './itemListContainer.css'
import ItemList from '../../components/itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greetings, titulo}) => {

    const {id} = useParams()

    return (
        <div>
            <h1>{titulo}</h1>
            <div className='texto'>
                <h2>Mi proyecto React</h2>
                <p>{greetings}</p>
            </div>
            <ItemList id={id} />
        </div>
    )
}

export default ItemListContainer