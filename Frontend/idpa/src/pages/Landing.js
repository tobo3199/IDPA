import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { getThemeProps } from '@mui/system';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";
import navbarlogo from "../images/navbar.png";
import script from "../images/script.png";
import book from "../images/book.png";
import plus from "../images/plus.png";
import title from "../images/Title5.png";
import "../Landing.css";

export default function Landing() {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/login");
      };

    return (
        <div className="main-container">
            <div className="left-container">
                <img src={title} alt="Titlepic"></img>
                <button className="button-landing" onClick={handleStart}>Start</button>
            </div>
            <div className="right-container">
                <div className="login-box landing">
                    <h3>About It</h3>
                    <h1>Easy Time to Learn English</h1>
                    <div className="user-box flexbox">
                        <img src={script} alt=""></img>
                        <p>Excercises to fill out</p>
                    </div>
                    <div className="user-box flexbox">
                        <img src={book} alt=""></img>
                        <p>Theory for everything</p>
                    </div>
                    <div className="user-box flexbox">
                        <img src={plus} alt=""></img>
                        <p>Upload your Content</p>
                    </div>
                </div>
            </div>
        </div>
    );
}