import './home.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Portada from '../../assets/Portada2.jpg'

const Home = () => {
    return (
        <div>
            <img className='imgPortada' src={Portada} />
            <div className='texto'>
                <h2>Sobre nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias deserunt ipsam est iure doloremque ut molestiae libero. Tempore ut accusamus amet doloribus harum odit, architecto laborum cupiditate beatae dignissimos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias deserunt ipsam est iure doloremque ut molestiae libero. Tempore ut accusamus amet doloribus harum odit, architecto laborum cupiditate beatae dignissimos.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
                <ItemListContainer />
        </div>
    )
}

export default Home