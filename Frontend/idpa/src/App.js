import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Student from './pages/Student';
import Kategorie from './pages/Kategorie';
import Kapitel from './pages/Kapitel';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from './components/Navbar';
import KategorieInhalt from './pages/KategorieInhalt';

function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/kategorie" element={<Kategorie />} />
        <Route path="/kapitel" element={<Kapitel />} />
        <Route path='/kategorie/:text' element={<KategorieInhalt/>}/>
      </Routes>
    </div>
  );
}

export default App; 
