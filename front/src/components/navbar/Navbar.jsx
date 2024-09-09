import "./Navbar.scss";
import React, {useState} from "react";
import menu from "../../../public/menu.png";
import x from "../../../public/x.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <img src={ menuOpen ? x : menu } alt="boton de menu desplegable" onClick={() => setMenuOpen(!menuOpen)} />
                <div className={ menuOpen ? "" : "oculto"}>
                    <a href="#home" onClick={() => setMenuOpen(!menuOpen)} >Inicio</a>
                
                    <a href="#skills" onClick={() => setMenuOpen(!menuOpen)} >Habilidades</a>
            
                    <a href="#projects" onClick={() => setMenuOpen(!menuOpen)} >Proyectos</a>
                
                    <a href="#contact" onClick={() => setMenuOpen(!menuOpen)} >Contacto</a>                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar