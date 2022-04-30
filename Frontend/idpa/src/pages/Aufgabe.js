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
import Edit from "./Edit";
import MEdit from "./MEdit";



export default function Aufgabe(props) {
    let navigate = useNavigate();
    const { aufgabe } = useParams();
    const [uebungO, setUebungO] = useState();
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
    var auf = "";
    var l1 = "";
    var l2 = "";

    var mauf = "";
    var ml1 = "";
    var ml2 = "";
    var ml3 = "";
    var l = 0;

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

        addArr(object);

        console.log(object);

        fetch("http://localhost:3000/api/sentenceTransformation/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        }).then(() => {
            console.log("New Sentence Transformation added")
        })

        window.location.reload();

    }

    const handleMultipleChoice = e => {
        e.preventDefault();
        setBem("");
        setLoesung("")
        setLoesung2("");
        setLoesung3("");
        setCheckLosesung("");

        const mobject = {
            a: mauf,
            1: ml1,
            2: ml2,
            3: ml3,
            c: l
        }

        const object = {
            aufgabenstellung: mauf,
            antwort1: ml1,
            antwort2: ml2,
            antwort3: ml3,
            korrekteAntwort: l,
            uebung: {
                id: uebungO.id,
                grammatikThema: {
                    id: uebungO.grammatikThema.id,
                },

            }
        }

        //addArrM(mobject)

        fetch("http://localhost:3000/api/multiplechoice/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        }).then(() => {
            console.log("New Multiple-Choice added ")
            console.log(object);
        })

        window.location.reload();


    }

    const addArr = (object) => {
    }

    const addArrM = (object) => {
        const newTaskM = [...mTasks, object];
        setMTasks(newTaskM);
        console.log("M Array:")
        console.log(mTasks);
    }

    const handleChangeAufgabe = (e) => {
        //setBem(e.target.value);
        auf = e.target.value;

    }

    const handleChangeAufgaben = (e) => {
        //setBem(e.target.value);
        mauf = e.target.value;

    }

    const handleChangeLoesung = (e) => {
        //setLoesung(e.target.value);
        l1 = e.target.value;
    }

    const handleChangeALoesung = (e) => {
        //setALoesung(e.target.value);
        l2 = e.target.value;
    }

    const handleChangeLoesung1 = (e) => {
        //setLoesung2(e.target.value);
        ml1 = e.target.value;
    }

    const handleChangeLoesung2 = (e) => {
        //setLoesung2(e.target.value);
        ml2 = e.target.value;
    }

    const handleChangeLoesung3 = (e) => {
        //setLoesung3(e.target.value);
        ml3 = e.target.value;
    }

    const handleCheckLoesung = (e) => {
        //setCheckLosesung(e.target.value);
        l = e.target.value;
    }

    const deleteTask = (id, e) => {
        console.log(id);

        fetch('http://localhost:3000/api/sentenceTransformation/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log("Sentence Transformation " + id + " deleted")
            })

        window.location.reload();
    }

    const deleteMTask = (id, e) => {
        console.log(id);

        fetch('http://localhost:3000/api/multiplechoice/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log("Sentence Transformation " + id + " deleted")
            })

        window.location.reload();
    }

    const handleEdit = () => {

    }



    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");

        if (!authToken) {
            navigate("/login");
        }

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

        fetch("http://localhost:3000/api/multiplechoice/" + aufgabe)
            .then(res => res.json())
            .then((result) => {
                setMTasks(result);
            }
            )
    }, []);

    function RenderSwitch() {


        console.log("Sentence Transformation clicked");
        return (
            <div>
                {number === 1 ?
                    <form onSubmit={() => handleAufgabe()}>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Sentence Transformation </label>
                            <br />
                            <label htmlFor="recipient-name" className="col-form-label">Task: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeAufgabe(e)}></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Solution: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeLoesung(e)}  ></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Alternative solution: </label>
                            <input type="text" className="form-control" id="bem" onChange={(e) => handleChangeALoesung(e)}  ></input>
                        </div>
                    </form>
                    : number === 2 ?
                        <form onSubmit={handleAufgabe}>
                            <div>
                                <label htmlFor="recipient-name" className="col-form-label">Gap-Text: </label>
                                <br />
                                <label htmlFor="recipient-name" className="col-form-label">Aufgabe: </label>
                                <input type="text" className="form-control" id="bem" onChange={handleChangeAufgabe} value={bem} ></input>
                            </div>
                            <div>
                                <label htmlFor="recipient-name" className="col-form-label">Lösung: </label>
                                <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung} value={loesung} ></input>
                            </div>
                        </form>

                        : number === 3 ?
                            <form onSubmit={handleMultipleChoice}>
                                <div>
                                    <label htmlFor="recipient-name" className="col-form-label">Multiple-Choice: </label>
                                    <br />
                                    <label htmlFor="recipient-name" className="col-form-label">Task: </label>
                                    <input type="text" className="form-control" id="bem" onChange={handleChangeAufgaben} ></input>
                                </div>
                                <div>
                                    <label htmlFor="recipient-name" className="col-form-label">Solution 1: </label>
                                    <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung1}></input>
                                    <label htmlFor="recipient-name" className="col-form-label">Solution 2: </label>
                                    <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung2}></input>
                                    <label htmlFor="recipient-name" className="col-form-label">Solution 3: </label>
                                    <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung3} ></input>
                                    <label htmlFor="recipient-name" className="col-form-label">Correct answer: </label>
                                    <br />
                                    <p>1, 2 or 3</p>
                                    <input type="number" id="bem" onChange={handleCheckLoesung} min="1" max="3" ></input>
                                </div>
                            </form>
                            : number === 0 ?
                                <p>Please select a excercise type</p>

                                :
                                <p>Please select a excercise type</p>
                }
            </div>


        );

    }

    function AddAufgabe() {
        return (
            <>
                <div className="centering">
                    <button className="btn-add" onClick={handleShow}>
                        Add Task
                    </button>
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Select task type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DropdownButton id="dropdown-basic-button" title="Exercise-Type">
                            <Dropdown.Item defaultChecked><button className="btn-add" onClick={() => setNumber(1)}>Sentence Transformation</button></Dropdown.Item>
                            <Dropdown.Item><button className="btn-add" onClick={() => setNumber(3)}>Multiple Choice</button></Dropdown.Item>
                        </DropdownButton>
                        <RenderSwitch />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button type="submit" onClick={number === 1 ? handleAufgabe : handleMultipleChoice} variant="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    function DisplayTasks() {
        return (
            tasks[0] ? tasks.map((t, index) => (
                <div className="task" key={index}>
                    <h4>Exercise {index + 1}</h4>
                    <br />
                    <h6>Task definition:</h6>
                    <p>{t.aufgabenstellung}</p>
                    <h6>Solution:</h6>
                    <p>{t.loesung1}</p>
                    <h6>Alternative solution:</h6>
                    <p>{t.loesung2}</p>
                    <div className="centering">

                        <div><Edit id={t.id}/></div>
                        <button className="btn-delete" onClick={() => deleteTask(t.id)}>Delete</button>
                    </div>


                </div>
            )) :
                <div className="task">
                    <p>No task yet</p>
                </div>
        );
    }

    function DisplayMultipleChoices() {
        return (
            mTasks[0] ? mTasks.map((t, index) => (
                <div className="task" key={index}>
                    <h4>Exercise {index + 1}</h4>
                    <br />
                    <h6>Task definition</h6>
                    <p>{t.aufgabenstellung}</p>
                    <h6>Solution 1:</h6>
                    <p>{t.antwort1}</p>
                    <h6>Solution 2:</h6>
                    <p>{t.antwort2}</p>
                    <h6>Solution 3:</h6>
                    <p>{t.antwort3}</p>
                    <h6>Correct answer:</h6>
                    <p>{t.korrekteAntwort}</p>
                    <div><MEdit mid={t.id}/></div>
                    <Button className="deleteButton" onClick={() => deleteMTask(t.id)}>Delete</Button>
                    <br/>
                    <p>{t.id}</p>
                    
                </div>
                
            )) :
                <div className="task">
                    <p>No task yet</p>
                </div>
        );
    }

    return (
        <div className="body-aufgabe">
            <h1>Task</h1>
            <div>
                <br />
                <h4>Sentence Transformations: </h4>
                <DisplayTasks />
            </div>
            <br />
            <div>
                <br />
                <h4>Multiple Choices: </h4>
                <DisplayMultipleChoices />
            </div>
            <br />
            <div>
                <div className="ce"><AddAufgabe /></div>
            </div>
        </div>
    );
}