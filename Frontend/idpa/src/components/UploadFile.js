import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import FileUpload from "react-material-file-upload";

export default function UploadFile() {

    const [files, setFiles] = useState < File > ([]);



    return (

        <Container>
            <FileUpload value={files} onChange={setFiles} />

        </Container>
    );
}