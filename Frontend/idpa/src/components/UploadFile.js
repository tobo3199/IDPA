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
        fetch('http://localhost:8080/fileData/uploadFile',
            {
                method: 'POST',
                body: fd,
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log('Sucess', result);
            })
            .catch((error) => {
                console.error('Error', error)
            })


    }

    return (
        <div>
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    );
}


export default UploadFile;
