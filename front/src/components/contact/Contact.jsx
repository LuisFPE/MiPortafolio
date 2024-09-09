import "./Contact.scss";
import React, {useState, useEffect} from "react";
import github from "../../../public/github.png";
import gmail from "../../../public/gmail.png";
import telefono from "../../../public/telefono.png";
import linkedin from "../../../public/linkedin.png";

const Contact = () => {

    const copiarContenido = async (texto) => {
        try {
          await navigator.clipboard.writeText(texto);
          console.log('Contenido copiado al portapapeles', texto);
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
    }

    return (
        <section id="contact">
            <h2>Mis Contactos</h2>
            <section>
                <div>
                    <img src={github} alt="" />
                    <h3>GitHub: https://github.com/LuisFPE</h3>
                    <a href="https://github.com/LuisFPE" target="_blank">Ir</a>
                </div>
                <div>
                    <img src={gmail} alt="" />
                    <h3>Gmail: luispadua2203@gmail.com</h3>
                    <button onClick={() => copiarContenido("luispadua2203@gmail.com")}>Copiar</button>
                </div>
                <div>
                    <img src={telefono} alt="" />
                    <h3>Telefono: +34 624250521</h3>
                    <button onClick={() => copiarContenido("624250521")}>Copiar</button>
                </div>
                <div>
                    <img src={linkedin} alt="" />
                    <h3>Linkedin: www.linkedin.com/in/luispadua</h3>
                    <a href="https://www.linkedin.com/in/luispadua" target="_blank">Ir</a>
                </div>

            </section>
        </section>
    )
}

export default Contact