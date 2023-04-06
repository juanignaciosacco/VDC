import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Portada from '../../assets/foto3.jpeg'

const Home = () => {
    return (
        <div>
            <img className='imgPortada' src={Portada} />
            <div className='texto'>
                <h2 className='text-2xl m-2'>Vidrios de la costa</h2>
                <p>Es un movimiento de reciclaje que nace en Jose Ignacio, Uruguay.</p>
                <p>Trabajando en gastronomía vimos la cantidad de botellas que se tiran y decidimos tomar el camino del reciclaje. A partir de ellas elaboramos artesanalmente nuestros productos.</p>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home