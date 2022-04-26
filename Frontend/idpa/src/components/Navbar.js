import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../Landing.css";
import "../login.css";
import logo from "../images/logo.png";
import navbarlogo from "../images/navbar.png";
import { useEffect } from "react";
import { useState } from "react";



export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const navigateStudent = () => {
    navigate("/student");
  };

  const navigateKategorie = () => {
    navigate("/thema");
  };

  const navigateKapitel = () => {
    navigate("/kapitel");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateSchueler = () => {
    navigate("/schueler-login");
  }

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/schueler-login")
  };

  const handleStart = () => {
    navigate("/");
  }

  /*
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={navigateStudent}
          >
            Student
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={navigateKategorie}
          >
            Kategorien
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={navigateKapitel}
          >
            Kapitel
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={navigateLogin}
          >
            Login
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleLogout}
          >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


  */

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      setToken("false");

    }

    if (authToken) {
      setToken("true");
    }
  }, []);

  return (
    <div className="nav container">
      <a onClick={handleStart}><img src={navbarlogo} alt="" className="navimg" ></img></a>
      <div className="second-container">
        {window.location.pathname === "/schueler-login" ? <a onClick={navigateLogin} className="btn-nav">Administration</a> : <a onClick={navigateSchueler} className="btn-nav">Schüler</a>}
        {window.location.pathname != "/schueler-login" && window.location.pathname != "/login" ? <a onClick={handleLogout} className="btn-nav">Logout</a> : <a></a>}
      </div>

    </div>
  );
}
