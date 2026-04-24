import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { SiComputrabajo } from "react-icons/si"; // Computrabajo está en la colección Simple Icons

function SocialButtons() {
  return (
    <div className="social-buttons">
      <a href="https://github.com/pichio7723" target="_blank" rel="noopener noreferrer" className="btn">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/luis-camilo-rojas-rueda-731797405/" target="_blank" rel="noopener noreferrer" className="btn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://candidato.co.computrabajo.com/candidate/home" target="_blank" rel="noopener noreferrer" className="btn">
        Computrabajo
      </a>

    </div>
  );
}

export default SocialButtons;