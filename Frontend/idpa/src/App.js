import logo from './logo.svg';
import './App.css';
import Student from './Student';
import Kategorie from './Kategorie';
import Kapitel from './components/Kapitel';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/kategorie" element={<Kategorie />} />
        <Route path="/kapitel" element={<Kapitel />} />
      </Routes>
    </div>
  );
}

export default App; 
