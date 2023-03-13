import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h2>Seguí conectado: </h2>
                <a href="https://www.instagram.com/vidrios.de.la.costa/"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href="https://wa.link/x0r1f1"><i><FontAwesomeIcon icon={faWhatsapp} /></i></a>
                <a href="https://www.facebook.com/profile.php?id=100071970972783"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
            </div>
        </footer>
    )
}

export default Footer