import './itemListContainer.css'
import ItemList from '../../components/itemList/ItemList'

const ItemListContainer = ({greetings, titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <div className='texto'>
                <h2>Mi proyecto React</h2>
                <p>{greetings}</p>
            </div>
            <ItemList />
        </div>
    )
}

export default ItemListContainer