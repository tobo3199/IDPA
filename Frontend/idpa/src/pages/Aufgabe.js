import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { Col, Container, Form, Row, Button, ButtonGroup, Modal, FormControl } from "react-bootstrap";
import { useEffect } from "react";
import { AddAlarmRounded, LocalSeeSharp } from "@mui/icons-material";


export default function Aufgabe(props){
    const { aufgabe } = useParams();
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [bem, setBem] = useState("");
    const [loesung, setLoesung] = useState("");

    const handleBemerkung = e => {
        e.preventDefault();
        setBem("");
        setLoesung("");
        handleClose();

        const object = {
            a : bem,
            l : loesung
        };

        addArr(object);

        console.log(object);

    }

    const addArr = (object) => {
        const newTask = [...tasks, object];
        setTasks(newTask);
        console.log(tasks);
    }

    const handleChangeAufgabe = (e) => {
        e.preventDefault();
        setBem(e.target.value);

    }

    const handleChangeLoesung = (e) => {
        e.preventDefault();
        setLoesung(e.target.value);
    }


    function AddAufgabe() {

        return (
            <>
                <Button className="button-center" variant="success" onClick={handleShow}>
                    Add Aufgabe
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Aufgabe hinzufügen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleBemerkung}>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Aufgabe: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeAufgabe} value={bem} ></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Lösung: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung} value={loesung} ></input>
                        </div>
                        {/*
                            <div>
                                <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                                <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                            </div>
                            */}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
                        <Button type="submit" onClick={handleBemerkung} variant="primary">Speichern</Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    /*
<div className="task">
              <p>Aufgabe</p>
              <p>My name is _____________ .</p>
              <p>Lösung:</p>
              <input type="text"></input>
              <br/>
          </div>
    */

    return (
        <div>
          <h1>Aufgabe</h1>
          
          {tasks.map((t, index) => (
              <div className="task" key={index}>
                  <p>Aufgabe {index + 1}</p>
                  <p>{t.a}</p>
                  <p>Lösung:</p>
                  <input type="text"></input>
              </div>
          ))}
          <br/>
          <div>
          <div><AddAufgabe /></div>
          </div>
          </div>
    );
}