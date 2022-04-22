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



export default function Aufgabe(props){
    const { aufgabe } = useParams();
    const [tasks, setTasks] = useState([]);
    const [mTasks, setMTasks] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [bem, setBem] = useState("");
    const [loesung, setLoesung] = useState("");
    const [Aloesung, setALoesung] = useState("");
    const [loesung2, setLoesung2] = useState("");
    const [loesung3, setLoesung3] = useState("");

    const [check, setCheck] = useState(false);
    const handleCheck = () => setCheck(true);
    const unhandleCheck = () => setCheck(false);

    const [check1, setCheck1] = useState(false);
    const handleCheck1 = () => setCheck1(true);
    const unhandleCheck1 = () => setCheck1(false);

    const [check2, setCheck2] = useState(false);
    const handleCheck2 = () => setCheck2(true);
    const unhandleCheck2 = () => setCheck2(false);

    const [number, setNumber] = useState(0);

    const [checkloesung, setCheckLosesung] = useState();

    const handleAufgabe = e => {
        e.preventDefault();
        setBem("");
        setLoesung("");
        setALoesung("");
        handleClose();

        const object = {
            a : bem,
            l : loesung,
            l2: Aloesung
        };

        addArr(object);

        console.log(object);

    }

    const handleMultipleChoice = e => {
        e.preventDefault();
        setBem("");
        setLoesung("")
        setLoesung2("");
        setLoesung3("");
        setCheckLosesung("");

        const mobject = {
            a : bem,
            1 : loesung,
            2 : loesung2,
            3 : loesung3,
            c : checkloesung
        }

        addArrM(mobject)

        console.log(mobject);
    }

    const addArr = (object) => {
        const newTask = [...tasks, object];
        setTasks(newTask);
        console.log(tasks);
    }

    const addArrM = (object) => {
        const newTaskM = [...mTasks, object];
        setMTasks(newTaskM);
        console.log("M Array:")
        console.log(mTasks);
    }

    const handleChangeAufgabe = (e) => {
        e.preventDefault();
        setBem(e.target.value);

    }

    const handleChangeLoesung = (e) => {
        e.preventDefault();
        setLoesung(e.target.value);
    }

    const handleChangeALoesung = (e) => {
        e.preventDefault();
        setALoesung(e.target.value);
    }

    const handleChangeLoesung2 = (e) => {
        e.preventDefault();
        setLoesung2(e.target.value);
    }

    const handleChangeLoesung3 = (e) => {
        e.preventDefault();
        setLoesung3(e.target.value);
    }

    const handleCheckLoesung = (e) => {
        e.preventDefault();
        setCheckLosesung(e.target.value);
    }

    //Checkbox 1
    const handleCheckers = (e) => {
        if(check === false){
            handleCheck();
        } else if(check === true){
            unhandleCheck();
        }
    }
    //Checkbox 2
    const handleCheckers1 = (e) => {
        if(check1 === false){
            handleCheck1();
        } else if(check1 === true){
            unhandleCheck1();
        }
    }

    //Checkbox 3
    const handleCheckers2 = (e) => {
        if(check2 === false){
            handleCheck2();
        } else if(check2 === true){
            unhandleCheck2();
        }
    }
    console.log("check1 : " + check);
    console.log("check2 : " + check1);
    console.log("check3 : " + check2);

    function RenderSwitch( ) {
        switch(number ){
            case 1:
                console.log("Sentence Transformation clicked");
                return(
                    <form onSubmit={handleAufgabe}>
                    <div>
                        <label htmlFor="recipient-name" className="col-form-label">Sentence Transformation </label>
                        <br/>
                        <label htmlFor="recipient-name" className="col-form-label">Aufgabe: </label>
                        <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeAufgabe(e)} value={bem} ></input>
                    </div>
                    <div>
                        <label htmlFor="recipient-name" className="col-form-label">Lösung: </label>
                        <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeLoesung(e)} value={loesung} ></input>
                    </div>
                    <div>
                        <label htmlFor="recipient-name" className="col-form-label">Alternative Lösung: </label>
                        <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeALoesung(e)} value={Aloesung} ></input>
                    </div>
                    {/*
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                            <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                        </div>
                        */}
                    </form>
                );
            case 2:
                console.log("Gap-Text clicked");
                return(
                    
                    <form onSubmit={handleAufgabe}>
                    <div>
                    <label htmlFor="recipient-name" className="col-form-label">Gap-Text: </label>
                    <br/>
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
                );
            case 3:
                console.log("Multiple-Choice clicked");
                return(
                    
                    <form onSubmit={handleMultipleChoice}>
                    <div>
                    <label htmlFor="recipient-name" className="col-form-label">Multiple-Choice: </label>
                    <br/>
                        <label htmlFor="recipient-name" className="col-form-label">Aufgabenstellung: </label>
                        <input type="text" className="form-control" id="bem" onChange={handleChangeAufgabe} value={bem} ></input>
                    </div>
                    <div>
                        <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 1: </label>
                        <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung} value={loesung} ></input>
                        <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 2: </label>
                        <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung2} value={loesung2} ></input>
                        <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 3: </label>
                        <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung3} value={loesung3} ></input>
                        <label htmlFor="recipient-name" className="col-form-label">Richtige Antwort: </label>
                        <br/>
                        <input type="number" id="bem" onChange={handleCheckLoesung} value={checkloesung} min="1" max="3" ></input>

                        

                        {/*
                        <input type="checkbox" className="form-control" id="bem" onChange={handleCheckers} checked={check} ></input>
                        <input type="checkbox" className="form-control" id="bem" onChange={handleCheckers1} checked={check1} ></input>
                        <input type="checkbox" className="form-control" id="bem" onChange={handleCheckers2} checked={check2} ></input>
                        */}
                        
                        
                    </div>
                    {/*
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                            <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                        </div>
                        */}
                    </form>
                );
            default :
            console.log("Default")
            return(
                <form onSubmit={handleAufgabe}>
                    <div>
                        <label htmlFor="recipient-name" className="col-form-label"> </label>
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
            )
        }
    }

    //
    /*
                 <DropdownButton id="dropdown-basic-button" title="Aufgaben-Typ">
                            <Dropdown.Item><button onClick={renderSwitch(1)}>Sentence Transformation</button></Dropdown.Item>
                            <Dropdown.Item><button onClick={renderSwitch(2)}>Gap Text</button></Dropdown.Item>
                            <Dropdown.Item><button onClick={renderSwitch(3)}>Multiple Choice</button></Dropdown.Item>
                        </DropdownButton>   

                        <button onClick={() => setNumber(1)}>Sentence Transformation</button>
                        <button onClick={() => setNumber(2)}>Gap Text</button>
                        <button onClick={() => setNumber(3)}>Multiple Choice</button>
    */

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
                    <Modal.Title>Aufgaben-Typ wählen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DropdownButton id="dropdown-basic-button" title="Aufgaben-Typ">
                            <Dropdown.Item><button onClick={() => setNumber(1)}>Sentence Transformation</button></Dropdown.Item>
                            <Dropdown.Item><button onClick={() => setNumber(2)}>Gap Text</button></Dropdown.Item>
                            <Dropdown.Item><button onClick={() => setNumber(3)}>Multiple Choice</button></Dropdown.Item>
                        </DropdownButton>   
                        <RenderSwitch/>
                        
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
                        <Button type="submit" onClick={number === 1 ? handleAufgabe : handleMultipleChoice} variant="primary">Speichern</Button>

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
          {tasks[0] || mTasks[0] ? tasks.map((t, index)=> (
              <div className="task" key={index}>
                  <p>Aufgabe {index + 1}</p>
                  <p>{t.a}</p>
                  <p>Lösung:</p>
                  <p>{t.l}</p>
              </div>
          )):  
          <div className="task">
          <p>No Aufgabe yet</p>
          </div>}
          <br/>
          <div>
          <div className="ce"><AddAufgabe /></div>
          </div>
          </div>
    );
}