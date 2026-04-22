import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="Navegation">
            <ul className="nav-list">
                <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
                <li><Link to="/Hobbies" style={{ color: "white" }}>Hobbies</Link></li>
                <li><Link to="/Estudios" style={{ color: "white" }}>Estudios</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;