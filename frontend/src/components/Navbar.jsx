import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav style={{padding: "10px", backgroundColor: "#2c3e50", color: "white"}}>
            <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
                <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
                <li><Link to="/Hobbies" style={{ color: "white" }}>Hobbies</Link></li>
                <li><Link to="/Estudios" style={{ color: "white" }}>Estudios</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;