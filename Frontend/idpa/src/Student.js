import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [students, setStudents] = useState([])
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const student = { firstname, lastname, email, age }
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            console.log("New Student added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>

            </Paper>
            <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}>

                {students.map(student => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                        Id:{student.id}<br />
                        Firstname:{student.firstname}<br />


                    </Paper>
                ))
                }


            </Paper>



        </Container>
    );
}