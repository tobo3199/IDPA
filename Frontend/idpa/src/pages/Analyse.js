import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { useNavigate } from "react-router";
import "../analyse.css";


export default function Analyse() {
    const { aufgabe } = useParams();
    let navigate = useNavigate();
    const [bewertungen, setBewertungen] = useState([]);

    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");

        if (!authToken || authToken !== "admin@kbw.ch") {
            navigate("/login");
        }

        fetch('http://localhost:3000/api/auswertung/' + aufgabe, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                console.log('aArray:')
                console.log(result);
                setBewertungen(result);

            }
            )


        /*
        fetch('http://localhost:3000/api/uebung/id/' + aufgabe, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setUebungO(result);

            }
            )

        fetch("http://localhost:3000/api/sentenceTransformation/" + aufgabe)
            .then(res => res.json())
            .then((result) => {
                setTasks(result);
            }
            )
            */
    }, []);
    const refresh = () => {
        window.location.reload();
    }


    return (
        <div>
            <br />
            <br />
            <h4>Analyse</h4>
            <br />
            <div>
                <h5>Auswertung zur Resultate</h5>
                <table className="table">

                    <tr>
                        <th className='texth'>Name:</th>
                        <th className='texth'>Result:</th>
                        <th></th>
                    </tr>
                    {bewertungen[0] ? bewertungen.map((b, index) => (
                        <>
                            <tr onChange={refresh} key={b.id}>
                                <td>{b.name}</td>
                                <td>{b.zahl}%</td>
                                <td></td>
                            </tr>
                        </>
                    )) :
                        <div>
                            <br />
                            <p className="p-marg">No Student has solved this exercise</p>
                        </div>
                    }
                </table>
            </div>
        </div>
    );
}