import "./Home.scss";
import React, {useState, useEffect} from "react";
import curriculum from "../../../public/Curriculum_LuisPadua.pdf";
import foto from "../../../public/foto2.png";

const Home = () => {
    const [textFont, setTextFont] = useState("textFont1");
    const [count, setCount] = useState(2);
 
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if (count == 10) {
                setCount(1);
            } else {
                setCount(count + 1);
            }
            setTextFont("textFont" + count);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    return (
        <section id="home">
            <div className="content">
                {/* El cambio de fuente solo se bien de 1250px en adelante */}
                <h1 className="name"><span className={textFont}>Luis Padua</span></h1>
                <h2 className="job">Programador <span>FrontEnd Jr</span></h2>
                <p className="description"> 

                    Programador Web con una sólida formación en HTML, CSS, JavaScript y en el desarrollo de sitios web modernos, apasionado por la creación de interfaces de usuario atractivas y funcionales, con capacidad para crear sitios web "Responsive", conocimientos de frameworks como React y Boostrap, experiencia en git y en la colaboración en equipos de desarrollo. Poseo conocimientos de backend como Docker, Node Js, Express Js y Mongo DB para la creación de base de datos con JavaScript. Soy una persona proactiva, eficiente, me gustan los desafíos, adaptable y con muchas ganas de seguir aprendiendo.
                    
                </p>
                <a href={curriculum} target="blank" >Descarga mi Curriculum ⇓</a>
            </div>
            <div className="avatar">
                <img src={foto} alt="" id="foto"/>
            </div>
        </section>
    )
}

export default Home