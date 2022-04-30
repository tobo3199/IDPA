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
import Landing from "./pages/Landing";
import { Nav } from "react-bootstrap";
import Schueler from "./pages/Schueler";
import Schuelertheorie from "./pages/Schuelertheorie";
import SchuelerAufgaben from "./pages/SchuelerAufgaben";
import Analyse from "./pages/Analyse";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [param, setParam] = useState();
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [grammatikthema, setGrammatikthema] = useState();

  const handleAction = (e) => {
    e.preventDefault();
    console.log(email, password);
    setUserEmail(email);
    if (email === "admin@kbw.ch") {
      //createUserWithEmailAndPassword(auth, email, password)
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          navigate("/thema");
          sessionStorage.setItem("Auth Token", email);
          console.log(response);
          const user = response.user;
          toast.success("Logged in succesfully!", {
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

  const handleSchueler = (e) => {
    e.preventDefault();
    console.log("Username: " + username + ", " + "Pin: " + pin);


    fetch('http://localhost:3000/api/grammatikthema/pin/' + pin, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setGrammatikthema(result);

      }
      ).then(
        //navigateSchueler(grammatikthema.id),
        //navigate("/thema/" + grammatikthema.id),
        console.log(grammatikthema.id),
        navigate(`/grammartopic/${grammatikthema.id}`),
        setGrammatikthema(""),
      ).then(
        sessionStorage.setItem("Auth Token", username),
      )

    /*

  */
    //setUsername(username);
    //setPin(pin);
  }

  const navigateSchueler = (id, e) => {
    console.log(id);
    if (id) {
      navigate("/thema/" + id);
    }

    /*else {
      if (grammatikthema) {
        //navigateSchueler(pin)
        //setGrammatikthema("");
      } else {
        toast.error("Grammatikthema with this pin doesn't exist!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    */
  }


  const RemoveParam = (param, e) => {
    console.log("Remove Param: ")
    console.log(param);
  };

  //<Navbar />

  return (
    <div className="app">
      <>
        {window.location.pathname === "/" ? <Landing /> : <Navbar />}
      </>

      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/thema" element={<Kategorie />} />
        <Route path="/kapitel" element={<Kapitel />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/grammartopic/:ide" element={<Schuelertheorie />} />
        <Route path="/grammartopic/:ide/exercise/:task" element={<SchuelerAufgaben />} />
        <Route path="/schueler-login" element={<Schueler
          title="Schüler-Login"
          setUsername={setUsername}
          setPin={setPin}
          handleSchueler={(e) => handleSchueler(e)} />} />
        <Route path="/thema/:ide" element={<KategorieInhalt />} />
        <Route path="/thema/:ide/aufgabe/:aufgabe" element={<Aufgabe />} />
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
