import ReCAPTCHA from "react-google-recaptcha"
import emailjs from '@emailjs/browser'
import { useState } from "react"
import './contacto.css'

const Contacto = () => {

    const emptyForm = {nombre: ' ', email: ' ', telefono: ' '}
    const [user, setUser] = useState(emptyForm)

    const changeHandler = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.value})
    }

    const submitHandler = (ev) => {
        emailjs.sendForm('service_ywhqy7s', 'template_n3av58s', ev.target, 'POqrx_snIIGH6dOSx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="formularioContacto">
            <h2>Contacto</h2>
            <form  onSubmit={submitHandler}>

                <label htmlFor="nombre">Nombre</label>
                <input name="nombre" id="nombre" value={user.nombre} onChange={changeHandler} />

                <label htmlFor="email">Email</label>
                <input name="email" id="email" value={user.email} onChange={changeHandler} />

                <label htmlFor="telefono">Telefono</label>
                <input name="telefono" id="telefono" value={user.telefono} onChange={changeHandler} />

                <label htmlFor="asunto">Asunto</label>
                <input name="asunto" id="asunto" value={user.asunto} onChange={changeHandler} />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" value={user.asunto} onChange={changeHandler} />

                <ReCAPTCHA className="captcha" sitekey="6LftAxgkAAAAAMRdfNtPthaQiYeqj2dX7eR7Cs12" />
                <button className="btnEnviarForm">Enviar</button>

            </form>
        </div>
        )
}

export default Contacto