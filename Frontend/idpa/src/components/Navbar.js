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
import logo from "../images/logo.png";
import navbarlogo from "../images/navbar.png";



export default function Navbar() {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login")
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

  return (
    <div className="nav container">
      <a onClick={handleStart}><img src={navbarlogo} alt="" className="navimg" ></img></a>
      <a onClick={navigateLogin} className="btn">Administration</a>
      <a onClick={handleLogout} className="btn">Logout</a>
    </div>
  );
}
