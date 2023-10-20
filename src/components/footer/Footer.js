/*
 * Copyright (c) 2023.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import logoJIS from '../../assets/LogoOscuroJIS.png'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='linkPoliticas'>
                <p>© 2023 Vidros de la costa Uruguay. Todos los derechos reservados.</p>
                <Link to={'/politicasDePrivacidad'}>Politicas de privacidad</Link>
            </div>
            <div className='iconos'>
                <h2>Seguí conectado: </h2>
                <a href="https://www.instagram.com/vidrios.de.la.costa/"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href="https://wa.link/x0r1f1"><i><FontAwesomeIcon icon={faWhatsapp} /></i></a>
                <a href="https://www.facebook.com/profile.php?id=100071970972783"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
            </div>
            <div className="logoJIS">
                <a href='https://jisdevelopment.com' target='_blank' rel="noreferrer"><img src={logoJIS} alt="Logo Jis development"/></a>
            </div>
        </footer>
    )
}

export default Footer