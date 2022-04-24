import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { getThemeProps } from '@mui/system';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function Kategorie() {
    const [input, setInput] = useState("");
    const [categorys, setCategorys] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        const object = {
            text: input
        }

        setInput("");

        addArr(object);
    }

    const addArr = cat => {
        console.log("Object:")
        console.log(cat);

        const newCats = [...categorys, cat];
        setCategorys(newCats);
        console.log("Array:")
        console.log(...categorys, cat);
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    //Grammatikthema Postrequest
    const [name, setName] = useState[''];
    const [pin, setPin] = useState[''];

    const handleClick = (e) => {
        e.preventDefault()
        const grammatikThema = { name, pin }
        console.log(grammatikThema)
        fetch("http://localhost:3000/api/grammatikthema", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(grammatikThema)

        }).then(() => {
            console.log("New Grammatikthema added")
        })
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" placeholder="add category" value={name} name="category" className="cat-input" onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="add category" value={pin} name="category" className="cat-input" onChange={(e) => setPin(e.target.value)}></input>
                <button className='cat-button' onClick={handleClick}>Add Category</button>
            </form>

            {categorys.map((cat, index) => (
                <div key={index}>
                    <Link to={`/kategorie/${cat.text}`}>{cat.text}</Link>
                </div>
            ))}
        </div>

    );
}