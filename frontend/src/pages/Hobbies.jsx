import React from "react";

function Hobbies() {

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Hobbies</h2>

      <div style={styles.list}>

        <div style={styles.card}>
          <h3>💪 GYM</h3>
          <p>llevo entrenando 2 años y medio, entreno mas fuerza me gustan los desafios y estoy listo para soportar un peso mayor al promedio que levanto.</p>
        </div>

        <div style={styles.card}>
          <h3>💻 Programar</h3>
          <p>Disfruto crear proyectos, he llevado dos años desde mi tecnico aprendiendo nuevas tecnologias, las mas usadas de el mercado desde estos ultimos años hasta las mejores de 2026.</p>
        </div>

        <div style={styles.card}>
          <h3>🎮 Videojuegos</h3>
          <p>me gustan los videosjuegos, fueron mi inspiracion para comenzar a programar estos fueron mi inicio con el software y gracias a ellos he adquirido habilidades como el trabajo en equipo, la comunicacion y la coordinacion.</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    color: "white",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px"
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    width: "180px",
    transition: "0.3s"
  }
};

export default Hobbies;