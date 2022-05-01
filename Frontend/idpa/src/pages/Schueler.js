import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import "../login.css";
import { useNavigate } from "react-router";

export default function Schueler({ title, setUsername, setPin, handleSchueler }) {


  return (

    <div className="login-box">
      <div className="login-container">
        <h2>Student Login</h2>
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
