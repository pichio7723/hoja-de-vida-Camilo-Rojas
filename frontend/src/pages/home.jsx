import Perfil from "../assets/sonic.gif"
import { Document, Page } from 'react-pdf';
import HojaDeVida from "../components/hoja_de_vida";
import Tecnologias from "../assets/tecnologias.png";
import { useState } from "react";
import FondoNegro from "../components/fondo_negro";

function Home() {
  const [mostrarCV, setMostrarCV] = useState(false); //definicion de elementos del boton
  return (

    <FondoNegro>


    
    <div className="page-layout">
      <div className="home-container">
        <h1 className="home-title">Hola bienvenido a mi hoja de Vida </h1>
        <br/><br/>

        <article className="home-article">
          <section className="cv-section">
            <h2>★ Hoja de Vida</h2>
            <button 
              className="toggle-btn"
              onClick={() => setMostrarCV(!mostrarCV)}
            >
              {mostrarCV ? "Ocultar CV" : "Mostrar CV"}
            </button>

            {/* Render condicional */}
            {mostrarCV && <HojaDeVida />}
          </section>

          <section className="about-section">
            <h2>★ Un poco Sobre mi</h2>
            <img src={Perfil} width="500px" height="450px" className="profile-img"/>
            <p className="about-text">
              <br/>
              ✦ Soy un joven apasionado por la tecnologia y los videojuegos, busco mejorar cada dia como persona y como profesional adquiriendo mis conocimientos en desarrollo de software actualizados y aprendiendo las mejores tecnologias de el mercado, Tengo buenas habilidades blandas, se trabajar en equipo y deseo aportar a tu empresa con mi conocimiento.
            </p>
          </section>

          <section className="stack-section">
            <h3 className="Stack">Mi Stack</h3>
            <img src={Tecnologias} alt="Tecnologías" className="stack-img"/>
          </section>

          <footer className="footer">
            <p>© 2026 Camilo - Todos los derechos reservados</p>
          </footer>
        </article>
      </div>
    </div>

    </FondoNegro>
  ); 
}
export default Home;
