import hojaDeVidaPDF from "../assets/hoja de vida.pdf";
function Home() {
  return (
    <>
    <h1>!Hola bienvenido a mi hoja de Vida</h1>

    <article>
        <section>
            <h2>Hoja de Vida</h2>
            <embed
            src={hojaDeVidaPDF}
            type="application/pdf" 
            width="100%" 
            height="600px" 
            />
        </section>
        <section>
            <h2>Un poco Sobre mi</h2>
            <p>Soy un joven apasionado por la tecnologia y los videosjuegos, busco mejorar cada dia como persona y como profesional adquiriendo mis conocimientos en desarrollo de software actualizados y aprendiendo las mejores tecnologias de el mercado, Tengo buenas habilidades blandas, se trabajar en equipo y deseo aportar a tu empresa con mi conocimiento.</p>
        </section>
    </article>
    </>
  ); 
}
export default Home;