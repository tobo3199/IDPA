import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

export default function Student() {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (   
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="add category" value={input} name="category" className="cat-input"></input>
            <button className='cat-button'>Add Category</button>
        </form>
            
    );
}