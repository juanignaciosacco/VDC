import './navBar.css'
import CartWidget from "../cartWidget/CartWidget"
import Logo from '../../CARMELA.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul className="navBar">
                <Link to={'/'}><img src={Logo} className='logo'></img></Link>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/category/Accesorios'}>Accesorios</Link></li>
                <li><Link to={'/category/Alimentos'}>Alimentos</Link></li>
                <li><Link to={'/Cart'}><CartWidget /></Link></li>
                
            </ul>
        </nav>
    )
}

export default NavBar 