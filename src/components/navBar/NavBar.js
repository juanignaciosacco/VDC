import './navBar.css'
import CartWidget from "../cartWidget/CartWidget"

const NavBar = () => {
    return (
        <ul className="navBar">
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Productos</a></li>
            <li><a href='#'><CartWidget /></a></li>
        </ul>
    )
}

export default NavBar 