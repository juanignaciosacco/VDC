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
        setUser({...user, idCompra: `${idOrden}`})
    }
    
    const stockUpdate = () => {
        const db = getFirestore()
        const items2 = collection(db, 'productos')
        productosAgregados.forEach(prod => {
            const producto = doc(items2, `${prod.id}`)
            updateDoc(producto, {
                Stock: prod.Stock - prod.cantidad
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
                    <div>
                        <h2>Procedimiento de compra</h2>
                        <p>Luego de elegir los productos debe completar este formulario de contacto y un representante de vidrios de la costa se comunicara con usted para coordinar el envío y  la forma de pago.</p>
                        <br />
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
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactForm