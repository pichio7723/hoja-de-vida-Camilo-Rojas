import React from "react";

function Hobbies() {

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Hobbies</h2>

      <div style={styles.list}>

        <div style={styles.card}>
          <h3>💪 GYM</h3>
          <p>Me gusta entrenar en mi tiempo libre.</p>
        </div>

        <div style={styles.card}>
          <h3>💻 Programar</h3>
          <p>Disfruto crear proyectos y aprender nuevas tecnologías.</p>
        </div>

        <div style={styles.card}>
          <h3>🎮 Videojuegos</h3>
          <p>Juego para relajarme y competir.</p>
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