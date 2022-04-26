import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { getThemeProps } from '@mui/system';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";
import "../kategorie.css";

export default function Kategorie({param, RemoveParam}) {
    const [input, setInput] = useState("");
    const [pin, setPin] = useState("");
    const [categorys, setCategorys] = useState([]);
    let navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const object = {
            text: input,
            p: pin
        }

        setInput("");
        setPin("");

        addArr(object);
    }

    const addArr = cat => {
        //console.log("Object:")
        //console.log(cat);

        const newCats = [...categorys, cat];
        setCategorys(newCats);
        //console.log("Array:")
        //console.log( ...categorys, cat);
    }


    const removeCatergory = cat => {
        var tCat = categorys;
        console.log(tCat);
        var index = categorys.indexOf(cat);
        console.log("index");
        console.log(index);
        tCat.splice(index, 1);
        setCategorys(tCat);
        //categorys.splice(index, 1);
        console.log(categorys);
    }

    const removeCategory = (cat) => {
        console.log(cat);
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handlePin = e => {
        setPin(e.target.value);
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");
    
        if (!authToken) {
          navigate("/login");
        }
      }, []);
    
      /*
                <div className='border' key={index}>
                    <Link className='text' to={`/kategorie/${cat.text}`}>{cat.text}</Link>
                    <div className="sameLine">
                        <input className='pin' type="text" value={"Pin: " + cat.p }></input>
                        <button className="button" type="button" class="btn btn-danger" onClick={() => removeCategory(cat)}>Delete</button>
                    </div>
                </div>
      */
    
    return (   
        <>
        <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <label className='custom-field two'>
                <input type="text" placeholder="Add Category" value={input} name="category" className="cat-input" onChange={handleChange}></input>
            </label>
            <label className='custom-field two'>
                <input type="text" placeholder="New Pin" value={pin} name="category" className="cat-input" onChange={handlePin}></input>            
            </label>
            <button className='cat-button'>Add Category</button>
        </form>
                <div>
                <table className="table">
                    
                <tr>
                    <th>Category:</th>
                    <th>PIN:</th>
                    <th></th>
                </tr>
                {categorys.map((cat, index) => (
                    <>
                    <tr key={index}>
                    <td><Link className='text' to={`/kategorie/${cat.text}`}>{cat.text}</Link></td>
                    <td><input className='pin' type="text" value={"Pin: " + cat.p }></input></td>
                    <td><button className="button" type="button" class="btn btn-danger" onClick={() => removeCategory(cat)}>Delete</button></td>
                    </tr>
                </>
            ))}
            </table>
            </div>
        </div>
        </>
    );
}