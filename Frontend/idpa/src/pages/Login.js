import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import "../login.css";
import { useNavigate } from "react-router";

export default function Login({ title, setEmail, setPassword, handleAction }) {
  const navigate = useNavigate();
  return (

        <div className="login-box">
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleAction}>
                <div className="user-box">
                    <input  type="email" 
                            name="" 
                            required=""
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}>
                            </input>
                    <label>Email</label>
                </div>
                  <div className="user-box">
                    <input  type="password" 
                            name="" 
                            required="" 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <label>Password</label>
                  </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}
