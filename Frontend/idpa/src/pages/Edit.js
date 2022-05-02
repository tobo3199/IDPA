import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { Col, Container, Form, Row, Button, ButtonGroup, Modal, FormControl } from "react-bootstrap";
import { useEffect } from "react";
import { AddAlarmRounded, LocalSeeSharp } from "@mui/icons-material";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";

import "../aufgabe.css";
import "../kategorie.css";

export default function Edit(id) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [uebungO, setUebungO] = useState();
    var eid = "";
    const { aufgabe } = useParams();
    var auf = "";
    var l1 = "";
    var l2 = "";
    const handleChangeAufgabe = (e) => {
        auf = e.target.value;

    }

    const handleChangeLoesung = (e) => {
        l1 = e.target.value;
    }

    const handleChangeALoesung = (e) => {
        l2 = e.target.value;
    }
    /*
        const object = {
            aufgabenstellung: auf,
            loesung1: l1,
            loesung2: l2,
            
            uebung: {
                id: uebungO.id,
                grammatikThema: {
                    id: uebungO.grammatikThema.id,
                },

            }
        }
    */


    const handleEdit = (idx, e) => {
        handleClose();

        const editObject = {
            aufgabenstellung: auf,
            loesung1: l1,
            loesung2: l2
        }

        console.log(editObject);


        fetch("https://limitless-fortress-25619.herokuapp.com/api/sentenceTransformation/" + idx.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editObject)

        }).then(() => {
            console.log("Sentence Transformation updated")
        })


        window.location.reload();

    }

    useEffect(() => {

        fetch('https://limitless-fortress-25619.herokuapp.com/api/uebung/id/' + aufgabe, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                setUebungO(result);

            }
            )
    }, []);

    return (
        <>

            
                <button className="btn-add" onClick={handleShow}>
                    Edit
                </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={() => handleEdit()}>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Sentence Transformation </label>
                            <br />
                            <label htmlFor="recipient-name" className="col-form-label">Aufgabe: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeAufgabe(e)}></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Lösung: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeLoesung(e)}  ></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Alternative Lösung: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeALoesung(e)}  ></input>
                        </div>
                        {/*
                                <div>
                                    <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                                    <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                                </div>
                                */}
                    </form >


                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
                    <Button type="submit" onClick={() => handleEdit(id)} variant="primary">Edit</Button>

                </Modal.Footer>
            </Modal >
        </>
    );
}