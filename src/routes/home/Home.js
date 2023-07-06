import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Portada from '../../assets/foto3.jpeg'
import foto from '../../assets/estudioCuadrado.JPG'

const Home = () => {
    return (
        <div>
            <img className='imgPortada' src={Portada} alt='Imagen portada'/>
            <h1 className='h1Home'>Vidrios de la costa</h1>
            <div className='sobreNosotros'>
                <div className='textoSobreNos'>
                    <p className='textoInformativo'>Vidrios de la Costa es un movimiento de reciclaje que nace en José Ignacio, Uruguay.</p>
                    <p className='textoInformativo'>Trabajando en gastronomía, observamos la cantidad de botellas que se desechan y decidimos tomar el camino del reciclaje.</p>
                    <p className='textoInformativo'>A partir de ellas elaboramos artesanalmente nuestros productos.</p>
                </div>
                <div className='imgCortadora'>
                    <img src={foto} alt='Imagen Inicion taller'></img>
                </div>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home