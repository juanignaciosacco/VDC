import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import "./contacto.css";

class Contacto extends React.Component {
  submitHandler = (ev) => {
    ev.preventDefault();

    // Crear un objeto FormData a partir del formulario
    const formData = new FormData(ev.target);

    // Hacer algo con formData, como añadir más datos
    formData.append("service_id", "service_ywhqy7s");
    formData.append("template_id", "template_n3av58s");
    formData.append("user_id", "POqrx_snIIGH6dOSx");

    // Enviar formData al servidor usando Fetch u otro método
    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al enviar el mail!");
        } else {
          alert("Tu email fue enviado!");
        }
        return response.json();
      })
      .catch((error) => {
        console.log("Oops... " + error.message);
      });
  };

  render() {
    return (
      <div className="formularioContacto">
        <h2>Contacto</h2>
        <form id="myForm" onSubmit={this.submitHandler}>
          <label htmlFor="nombre">Nombre</label>
          <input name="nombre" id="nombre" />

          <label htmlFor="email">Email</label>
          <input name="email" id="email" />

          <label htmlFor="telefono">Telefono</label>
          <input name="telefono" id="telefono" />

          <label htmlFor="asunto">Asunto</label>
          <input name="asunto" id="asunto" />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea name="mensaje" id="mensaje" />

          <ReCAPTCHA
            className="captcha"
            sitekey="6LftAxgkAAAAAMRdfNtPthaQiYeqj2dX7eR7Cs12"
          />
          <button className="btn btnEnviarForm">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contacto;
