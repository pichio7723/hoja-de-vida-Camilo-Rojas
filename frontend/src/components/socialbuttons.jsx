import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { SiComputrabajo } from "react-icons/si"; // Computrabajo está en la colección Simple Icons

function SocialButtons() {
  return (
    <div className="social-buttons">
      <a href="https://github.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="btn">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="btn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.computrabajo.com/perfil/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="btn">
        Computrabajo
      </a>

    </div>
  );
}

export default SocialButtons;