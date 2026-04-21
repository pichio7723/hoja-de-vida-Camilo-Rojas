import React from "react";

//importar imágenes
import gym from "../assets/gym.jpg";
import programar from "../assets/programacion.jpg";
import juegos from "../assets/zelda.gif";

function Hobbies() {

  const hobbies = [
    {
      nombre: "💪 GYM",
      imagen: gym,
      desc: "llevo entrenando 2 años y medio, entreno mas fuerza me gustan los desafios y estoy listo para soportar un peso mayor al promedio que levanto."
    },
    {
      nombre: "💻 Programar",
      imagen: programar,
      desc: "Disfruto crear proyectos, he llevado dos años desde mi tecnico aprendiendo nuevas tecnologias, las mas usadas de el mercado desde estos ultimos años hasta las mejores de 2026."
    },
    {
      nombre: "🎮 Videojuegos",
      imagen: juegos,
      desc: "me gustan los videosjuegos, fueron mi inspiracion para comenzar a programar estos fueron mi inicio con el software y gracias a ellos he adquirido habilidades como el trabajo en equipo, la comunicacion y la coordinacion."
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Hobbies</h2>

      <div style={styles.list}>
        {hobbies.map((hobby, index) => (
          <div key={index} style={styles.card}>
            
            <h3>{hobby.nombre}</h3>

            <img src={hobby.imagen} style={styles.img} />

            <p>{hobby.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    color: "white",
    textAlign: "center"
  },

  title: {
    marginBottom: "100px"
  },

  list: {
    display: "flex",
    flexDirection: "column", // (vertical)
    alignItems: "center",
    gap: "60px"
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "800px"
  },

  img: {
    width: "100%",
    borderRadius: "10px",
    margin: "10px 0"
  }
};

export default Hobbies;