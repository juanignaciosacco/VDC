import { useContext, useState } from "react"
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import './contactForm.css'
import { CartContext } from "../../Contextos/CartContext"

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
        const formularioContacto = collection(db, 'orders')
        addDoc(formularioContacto, {'user': user, 'item': productosAgregados}).then((snapshot) => {
            setIdOrden(snapshot.id)
        })
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
            <h1>Formulario contacto</h1>
            <div className="contactForm">
                {idOrden ? (
                    <div>
                        <p>Tu orden de compra fue ingresada exitosamente!! ID: {idOrden}</p>
                        <Link to={'/'}><button className="btnVolver" onClick={clickHandler}>Volver</button></Link>
                    </div>
                ):(
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input name="nombre" id="nombre" value={user.nombre} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" value={user.email} onChange={changeHandler} />
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <input name="telefono" id="telefono" value={user.telefono} onChange={changeHandler} />
                        </div>
                        <button className="btnEnviarForm">Enviar Orden</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm