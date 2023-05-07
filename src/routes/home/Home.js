import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Portada from '../../assets/foto3.jpeg'

const Home = () => {
    return (
        <div>
            <img className='imgPortada' src={Portada} alt='Imagen portada'/>
            <div className='texto'>
                <h1 className='h1Home'>Vidrios de la costa</h1>
                <p className='textoInformativo'>Es un movimiento de reciclaje que nace en Jose Ignacio, Uruguay.</p>
                <p className='textoInformativo'>Trabajando en gastronomía vimos la cantidad de botellas que se tiran y decidimos tomar el camino del reciclaje. A partir de ellas elaboramos artesanalmente nuestros productos.</p>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home