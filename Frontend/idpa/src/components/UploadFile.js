import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import FileUpload from "react-material-file-upload";

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));



function UploadFile() {

    const [selectedFile, setSelectedFile] = useState('')

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);
        axios.post('https://myrenting-default-rtdb.europe-west1.firebasedatabase.app/', fd)
            .then(res => {
                console.log(res);
            });
    }

    return (
        <div>
            <input type="file" onChange={fileSelectedHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    );
}


export default UploadFile;
