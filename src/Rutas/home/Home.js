import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'

const Home = () => {
    return (
        <div>
            <div className='texto'>
                <h2>Mi proyecto React</h2>
            </div>
                <ItemListContainer />
        </div>
    )
}

export default Home