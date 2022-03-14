import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import UploadFile from '../components/UploadFile';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Kapitel() {

    return (
        <Container>
            <p>Kapitel</p>
            <UploadFile></UploadFile>
        </Container>
    );
}