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
  <div className="container">
    <h2 className="title">Mis Hobbies Favortitos</h2>

    <div className="list">
      {hobbies.map((hobby) => (
        <div key={hobby.nombre} className="card">

          <h3>{hobby.nombre}</h3>

          <img
            src={hobby.imagen}
            alt={hobby.nombre}
            className="img"
          />

          <p>{hobby.desc}</p>

        </div>
      ))}
    </div>

  </div>
);
}

export default Hobbies;