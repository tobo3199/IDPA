import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { getThemeProps } from '@mui/system';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";
import "../kategorie.css";
import '../App.css';


export default function Kategorie({ param, RemoveParam }) {
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [categorys, setCategorys] = useState([]);
    let navigate = useNavigate();

    const handleSubmit = e => {
        window.location.reload();

        /*
        const object = {
            text: name,
            p: pin
        }
        */

        setName("");
        setPin("");

        //addArr(object);

        e.preventDefault()
        const grammatikthema = { name, pin }
        console.log(grammatikthema)

        fetch("http://localhost:3000/api/grammatikthema/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(grammatikthema)

        }).then(() => {
            console.log("New Grammatikthema added")
        })
    }

    const addArr = cat => {
        //console.log("Object:")
        //console.log(cat);

        const newCats = [...categorys, cat];
        setCategorys(newCats);
        console.log("Array:")
        console.log(...categorys, cat);
    }

    const handleChange = e => {
        setName(e.target.value);
    }

    const handlePin = e => {
        setPin(e.target.value);
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");

        if (authToken !== "admin@kbw.ch") {
            navigate("/login");
        }

        fetch("http://localhost:3000/api/grammatikthema/")
            .then(res => res.json())
            .then((result) => {
                setCategorys(result);
            }
            )
    }, []);

    const refresh = () => {
        window.location.reload();
    }

    const handleDelete = (id, e) => {
        window.location.reload();
        console.log("ID: " + id);
        fetch('http://localhost:3000/api/grammatikthema/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log("Grammatikthema " + id + " deleted")
            })
    }

    /*
              <div className='border' key={index}>
                  <Link className='text' to={`/kategorie/${cat.text}`}>{cat.text}</Link>
                  <div className="sameLine">
                      <input className='pin' type="text" value={"Pin: " + cat.p }></input>
                      <button className="button" type="button" class="btn btn-danger" onClick={() => removeCategory(cat)}>Delete</button>
                  </div>
              </div>

              onClick={() => removeCategory(cat)}
    */

              /*
<label className='custom-field two'>
                <input type="text" placeholder="New Pin" value={pin} name="category" className="cat-input" onChange={handlePin}></input>            
            </label>
              */

    return (
        <>
        <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <label className='custom-field two'>
                <input type="text" placeholder="Add Category" value={name} name="category" className="cat-input" onChange={handleChange}></input>
            </label>
            {/* <label className='custom-field two'>
                <input type="text" placeholder="New Pin" value={pin} name="category" className="cat-input" onChange={handlePin}></input>            
            </label> */}
            <button className='btn-add'>Add Category</button>
        </form>
                <div>
                    <table className="table">

                        <tr>
                            <th className='texth'>Category:</th>
                            <th className='texth'>PIN:</th>
                            <th></th>
                        </tr>
                        {categorys.map((cat, index) => (
                            <>
                                <tr onChange={refresh} key={cat.id}>
                                    <td><Link className='text' to={`/thema/${cat.id}`}>{cat.name}</Link></td>
                                    <td><input className='pin' type="text" value={"Pin: " + cat.pin}></input></td>
                                    <td><button class="btn-delete" type="button" onClick={(e) => handleDelete(cat.id, e)} >Delete</button></td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>
            </div>
        </>
    );
}