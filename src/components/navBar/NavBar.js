import './navBar.css'
import CartWidget from "../cartWidget/CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul className="navBar">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/category/Accesorios'}>Accesorios</Link></li>
                <li><Link to={'/category/Alimentos'}>Alimentos</Link></li>
                <li><a href='#'><CartWidget /></a></li>
            </ul>
        </nav>
    )
}

export default NavBar 