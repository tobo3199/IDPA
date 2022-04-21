import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Student from "./pages/Student";
import Kategorie from "./pages/Kategorie";
import Kapitel from "./pages/Kapitel";
import Aufgabe from "./pages/Aufgabe";
import Login from "./pages/Login";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import KategorieInhalt from "./pages/KategorieInhalt";
import { app, storage } from "./firebase-config";
import { getAuth, createUserWithEmailAndPassword, user } from "firebase/auth";
import { db } from "./firebase-config";
import { auth } from "./firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const handleAction = (e) => {
    e.preventDefault();
    console.log(email, password);
    setUserEmail(email);
    if (email === "admin@kbw.ch") {
      createUserWithEmailAndPassword(auth, email, password)
        //signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          navigate("/kategorie");
          sessionStorage.setItem("User", email);
          console.log(response);
          const user = response.user;
        });
    } else {
      console.log("Wrong email").catch((error) => {
        console.log(error);
        toast.error("Wrong username!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/kategorie" element={<Kategorie />} />
        <Route path="/kapitel" element={<Kapitel />} />
        <Route path="/kategorie/:text" element={<KategorieInhalt />} />
        <Route path="/kategorie/:text/aufgabe/:aufgabe" element={<Aufgabe />} />
        <Route
          path="/login"
          element={
            <Login
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={(e) => handleAction(e)}
              //toast={ToastContainer}
            />
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
