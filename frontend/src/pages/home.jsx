import Perfil from "../assets/sonic.gif"
import { Document, Page } from 'react-pdf';
import HojaDeVida from "../components/hoja_de_vida";

function Home() {
  return (
    <>
    <h1>❗Hola bienvenido a mi hoja de Vida 😉</h1>
    <br/>
    <br/>

    <article>
        <section>
            <h2>🪪Hoja de Vida</h2>
            <br/>
            <br/>
            <HojaDeVida/>
            <br/>
            <br/>
        </section>
        <section>
            <h2>👤Un poco Sobre mi</h2>
            <br/>
            <br/>
            <img src={Perfil} width="500px" height="450px" />
            <br/>
            <br/>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff" }} > ✦ Soy un joven apasionado por la tecnologia y los videosjuegos, busco mejorar cada dia como persona y como profesional adquiriendo mis conocimientos en desarrollo de software actualizados y aprendiendo las mejores tecnologias de el mercado, Tengo buenas habilidades blandas, se trabajar en equipo y deseo aportar a tu empresa con mi conocimiento.</p>
        </section>
        <footer style={{ marginTop: "40px", padding: "10px", backgroundColor: "#2c3e50", color: "white", textAlign: "center" }}>
            <p>© 2026 Camilo - Todos los derechos reservados</p>
        </footer>
    </article>
    </>
  ); 
}
export default Home;