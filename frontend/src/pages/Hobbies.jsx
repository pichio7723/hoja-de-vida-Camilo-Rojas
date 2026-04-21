import React from "react";

import gym from "../assets/gym.jpg";
import programar from "../assets/programacion.jpg";
import juegos from "../assets/zelda.gif";
import Musica from "../assets/musica.jpg";
import Lectura from "../assets/lectura.jpg"



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
    },
    {
      nombre: "🎵 Musica",
      imagen: Musica,
      desc: "me gusta mucho la musica electronica, sobretodo el techno y el metal, aunque algo que nunca falta en mi playlist es el Hard techno."
    },
    {
      nombre: "📚 Lectura",
      imagen: Lectura,
      desc: "me gusta mucho leer, es la fuente de mi conocimiento y los libros son perfectamente sabios para ofrecer un conocimiento basto y entretenimiento creativo."
    }


  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Hobbies</h2>

      <div style={styles.list}>
        {hobbies.map((hobby) => (
          <div
            key={hobby.nombre}
            style={styles.card}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3>{hobby.nombre}</h3>

            <img
              src={hobby.imagen}
              alt={hobby.nombre}
              style={styles.img}
            />

            <p>{hobby.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

//esto va a fuera del compenente
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
    flexDirection: "column",
    alignItems: "center",
    gap: "60px"
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "800px",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  },

  img: {
    width: "100%",
    borderRadius: "10px",
    margin: "10px 0"
  }
};

export default Hobbies;