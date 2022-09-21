import './itemListContainer.css'

const ItemListContainer = ({greetings, titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <div className='texto'>
                <h2>Mi proyecto React</h2>
                <p>{greetings}</p>
            </div>
        </div>
    )
}

export default ItemListContainer