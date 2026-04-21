import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";   // tu página principal
import Perfil from "./pages/Hobbies"; // crea este archivo
import Estudios from "./pages/estudios"; // crea este archivo
import './App.css';
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Estudios" element={<Estudios />} />
      </Routes>
    </Router>
  );
}

export default App;
