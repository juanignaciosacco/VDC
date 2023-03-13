import { useContext, useState } from "react"
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from '@emailjs/browser'
import { Link } from "react-router-dom"
import './contactForm.css'
import { CartContext } from "../../contextos/CartContext"

const ContactForm = () => {

    const emptyForm = {nombre: ' ', email: ' ', telefono: ' '}
    const { clearAllItems, productosAgregados } = useContext(CartContext)
    const [user, setUser] = useState(emptyForm)
    const [idOrden, setIdOrden] = useState()

    const changeHandler = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.value})
    }

    const submitHandler = (ev) => {
        ev.preventDefault()
        stockUpdate()
        const db = getFirestore()
        const formularioContacto = collection(db, 'ordenes')
        addDoc(formularioContacto, {'user': user, 'item': productosAgregados}).then((snapshot) => {
            setIdOrden(snapshot.id)
        })

        emailjs.sendForm('service_ywhqy7s', 'template_n3av58s', ev.target, 'POqrx_snIIGH6dOSx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    const stockUpdate = () => {
        const db = getFirestore()
        const items2 = collection(db, 'items')
        productosAgregados.forEach(prod => {
            const item = doc(items2, `${prod.id}`)
            updateDoc(item, {
                stock: prod.stock - prod.cantidad
            })
        });
    }

    const clickHandler = () => {
        setUser(emptyForm)
        setIdOrden('')
        clearAllItems()
    }

    return (
        <div>
            <h1 className="text-4xl">Formulario contacto</h1>
            <div className="contactForm">
                {idOrden ? (
                    <div>
                        <p>Tu orden de compra fue ingresada exitosamente!! ID: {idOrden}</p>
                        <Link to={'/'}><button className="btnVolver" onClick={clickHandler}>Volver</button></Link>
                    </div>
                ):(
                    <form  onSubmit={submitHandler}>

                        <label htmlFor="nombre">Nombre</label>
                        <input name="nombre" id="nombre" value={user.nombre} onChange={changeHandler} />

                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" value={user.email} onChange={changeHandler} />

                        <label htmlFor="telefono">Telefono</label>
                        <input name="telefono" id="telefono" value={user.telefono} onChange={changeHandler} />
                    
                        <ReCAPTCHA className="captcha" sitekey="6LftAxgkAAAAAMRdfNtPthaQiYeqj2dX7eR7Cs12" />
                        <button className="btnEnviarForm">Enviar Orden</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm