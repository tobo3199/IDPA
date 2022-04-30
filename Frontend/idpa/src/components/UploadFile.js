import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import FileUpload from "react-material-file-upload";
import "./CSS/uploadfile.css";


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
        fd.append('file', selectedFile, selectedFile.name);
        fetch('http://localhost:3000/api/fileData/uploadFile',
            {
                method: 'POST',
                body: fd,
                // headers: { "Content-Type": "multipart/form-data, boundary=----WebKitFormBoundaryZgPNpTjXugZbGrkX" }
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log('Sucess', result);
            })
            .catch((error) => {
                console.error('Error', error)
            })
            
            window.location.reload();
            
        }

    return (

        <div className='up-container'>
            <input className='btn-datei btn-5' type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
            <button className='btn-add' onClick={fileUploadHandler}>Upload</button>
        </div>

    );
}


export default UploadFile;
