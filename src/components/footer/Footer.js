import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h2>Seguí conectado: </h2>
                <i><FontAwesomeIcon icon={faInstagram} /></i>
                <i><FontAwesomeIcon icon={faFacebook} /></i>
                <i><FontAwesomeIcon icon={faWhatsapp} /></i>
            </div>
        </footer>
    )
}

export default Footer