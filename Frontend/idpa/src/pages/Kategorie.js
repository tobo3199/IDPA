import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { getThemeProps } from '@mui/system';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";

export default function Kategorie({param, RemoveParam}) {
    const [input, setInput] = useState("");
    const [categorys, setCategorys] = useState([]);
    let navigate = useNavigate();

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
        console.log( ...categorys, cat);
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");
    
        if (!authToken) {
          navigate("/login");
        }
      }, []);
    
    
    return (   
        <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="add category" value={input} name="category" className="cat-input" onChange={handleChange}></input>
            <button className='cat-button'>Add Category</button>
        </form>
        
            {categorys.map((cat, index) => (
                <div key={index}>
                    <Link to={`/kategorie/${cat.text}`}>{cat.text}</Link>
                    <button type="button" className="btn btn-danger" onClick={(e) => RemoveParam(param, e)}>Remove</button>
                </div>
            ))}
        </div>
            
    );
}