import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import "../login.css";
import { useNavigate } from "react-router";

export default function Schueler({ title, setUsername, setPin, handleSchueler }) {
  
  /*<form onSubmit={handleAction}>
        <h2>Login:</h2>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit">Login</button>
      </form>*/

      /*
  const handleSchueler = (e) => {
    e.preventDefault();
    console.log("Username: " + username + ", " + "Pin: " + pin);

      if(thema){
      navigate("/thema/" + thema.id);
      } else {
        console.log("Thema doesnt exist!")
      }
  }

  const getThema = (pin, e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/grammatikthema/pin/' + pin, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setThema(result);

      }
      )
  }

  const handleUsername = (e) => {
    //setCheckLosesung(e.target.value);
    setUsername(e.target.value);
    console.log(username);
  }

  const handlePin = (e) => {
    //setCheckLosesung(e.target.value);
    setPin(e.target.value);
    console.log(username);
  }

  useEffect(() => {

    let authToken = sessionStorage.getItem("Auth Token");

    if (pin !== null && pin.length === 6) {
      getThema(pin);
    }

  }, []);

  */



  return (

    <div className="login-box">
      <div className="login-container">
        <h2>Schüler Login</h2>
        <form onSubmit={handleSchueler}>
          <div className="user-box">
            <input type="text"
              name=""
              required=""
              id="username"
              onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="text"
              name=""
              required=""
              id="pin"
              onChange={(e) => setPin(e.target.value)}>
            </input>
            <label>PIN</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
