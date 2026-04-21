import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";   // tu página principal
import Perfil from "./pages/Hobbies"; // crea este archivo
import Contacto from "./pages/estudios"; // crea este archivo
import './App.css';
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Hobbies />} />
        <Route path="/contacto" element={<estudios />} />
      </Routes>
    </Router>
  );
}

export default App;
