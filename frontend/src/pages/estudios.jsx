import React from "react";
import FondoNegro from "../components/fondo_negro.jsx";
import BachillerImg from "../assets/acta.jpg";
import TecnicoImg from "../assets/certificado.jpg";
import InglesImg from "../assets/ingles.jpg";
import ConstanciaImg from "../assets/constancia.jpg"; // aún no lo usamos

function Estudios() {
  const estudios = [
    {
      titulo: "Bachiller",
      lugar: "Ofelia Uribe De Acosta",
      descripcion: "Culmine mi bachillerato con formación académica general",
      año: "2025",
      imagen: BachillerImg
    },
    {
      titulo: "Técnico en Programación de software",
      lugar: "Ofelia Uribe De Acosta",
      descripcion: "Culmine mi Técnico con formación académica general",
      año: "2025",
      imagen: TecnicoImg
    },
    {
      titulo: "Certificado de Inglés",
      lugar: "Ofelia Uribe De Acosta",
      descripcion: "Culmine mis estudios con el mejor inglés de mi colegio",
      año: "2025",
      imagen: InglesImg
    },
    {
      titulo: "Tecnólogo en Programación de software",
      lugar:
        "SENA - Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital",
      descripcion: "Estoy en formación de mi tecnólogo, aprendiendo cada día",
      año: "Finalización 2027"
      // sin imagen porque aún no lo terminas
    },
  ];

  return (
    <FondoNegro>
      <div className="container">
        <h1 className="title">✦ Mis Estudios</h1>

        <div className="list">
          {estudios.map((estudio) => (
            <div key={estudio.titulo} className="card">
              <h3>{estudio.titulo}</h3>

              {/* Renderiza la imagen solo si existe */}
              {estudio.imagen && (
                <img
                  src={estudio.imagen}
                  alt={estudio.titulo}
                  className="img"
                />
              )}

              <p><strong>Lugar:</strong> {estudio.lugar}</p>
              <p>{estudio.descripcion}</p>
              <p><strong>Año:</strong> {estudio.año}</p>
            </div>
          ))}
        </div>
      </div>
    </FondoNegro>
  );
}

export default Estudios;
