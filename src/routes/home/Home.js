import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Portada from '../../assets/foto3.jpeg'

const Home = () => {
    return (
        <div>
            <img className='imgPortada' src={Portada} />
            <div className='texto'>
                <h2 className='text-2xl m-2'>Vidrios de la costa</h2>
                <p>Es un movimiento de reciclaje con botellas de vidrio, a partir de ellas elaboramos artesanalmente nuestras originales piezas.</p>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home