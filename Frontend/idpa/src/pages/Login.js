import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
//import "../login.css";

export default function Login({ title, setEmail, setPassword, handleAction }) {
  return (
    <div>
      <form onSubmit={handleAction}>
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
      </form>
    </div>
  );
}
