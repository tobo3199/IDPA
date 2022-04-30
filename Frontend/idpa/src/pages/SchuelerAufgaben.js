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
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';



export default function SchuelerAufgaben(props) {
    let navigate = useNavigate();
    const { task } = useParams();
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
    /*
    const r1 = false;
    const r2 = false;
    const r3 = false;
    */
    var r1 = false;
    var r2 = false;
    var r3 = false;
    /*
    const [r1, setR1] = useState(false);
    const [r2, setR2] = useState(false);
    const [r3, setR3] = useState(false);
    */
    const [userInput, setUserInput] = useState([]);
    //const [input, setInput] = useState();
    var input;
    const [answers, setAnswers] = useState([]);
    const [isCorrect, setIsCorrect] = useState([]);
    const [submit, setSubmit] = useState(false);
    var counter = 0;
    const [prozent, setProzent] = useState(0);

    const [sentenceAnswers, setSentenceAnswers] = useState([]);

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
    const [lnumber, setLNumber] = useState(0);
    const [Mnumber, setMNumber] = useState(0);
    const [checknumber, setChecknumber] = useState(0);
    const [answerS, setAnswerS] = useState("");

    const [checkloesung, setCheckLosesung] = useState();

    //const [userAntwort, setUserAntwort] = useState();
    var userAntwort = 0;

    const handleAufgabe = e => {
        e.preventDefault();
        setBem("");
        setLoesung("");
        setALoesung("");
        handleClose();

        /*
        const object = {
            a: auf,
            l: l1,
            l2: l2
        };
        */



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

        // ändern zu grammatikthema id -> und backend herausfinden wie machen

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
        /*
        const newTask = [...tasks, object];
        setTasks(newTask);
        console.log(tasks);
        */
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

    const handleChangeLoesung = (idx, event) => {
        //setLoesung(e.target.value);
        //console.log(event);
        l1 = event.target.value;
        sentenceArray(l1, idx);

    }

    const sentenceArray = (value, idx) => {
        console.log("VALUE + IDX:")
        console.log(value, idx);
        let temp = sentenceAnswers;
        temp[idx] = value;
        setSentenceAnswers(temp);
        console.log(sentenceAnswers);
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
        /*
        var temp = tasks;
        console.log(temp);
        tasks.splice(index, 1);
        setTasks(temp);
        console.log(tasks);
        */
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
        /*
        var temp = tasks;
        console.log(temp);
        tasks.splice(index, 1);
        setTasks(temp);
        console.log(tasks);
        */
        console.log(id);

        fetch('http://localhost:3000/api/sentenceTransformation/' + id, {
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
            navigate("/schueler-login");
        }

        fetch('http://localhost:3000/api/uebung/id/' + task, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setUebungO(result);

            }
            )

        fetch("http://localhost:3000/api/sentenceTransformation/" + task)
            .then(res => res.json())
            .then((result) => {
                setTasks(result);
            }
            )

        fetch("http://localhost:3000/api/multiplechoice/" + task)
            .then(res => res.json())
            .then((result) => {
                setMTasks(result);
            }
            )
    }, []);

    /*
    const editTask = (task) => {
        console.log(task);
        handleShow(true);
        setNumber(1);
        auf = task.a,
        l1 = task.l1,
        l2 = task.l2
    }
    */


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
                        {/*
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                            <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                        </div>
                        */}
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
                            {/*
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Status: </label>
                            <input type="text" value={" Status: " + (todo.status)} class="form-control"/>
                        </div>
                        */}
                        </form>

                        : number === 3 ?
                            <form onSubmit={handleMultipleChoice}>
                                <div>
                                    <label htmlFor="recipient-name" className="col-form-label">Multiple-Choice: </label>
                                    <br />
                                    <label htmlFor="recipient-name" className="col-form-label">Task definition: </label>
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
                                    <input type="number" id="bem" onChange={handleCheckLoesung} min="1" max="3" ></input>



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
                            : number === 0 ?
                                <p>Please select a excercise type</p>

                                :
                                <p>Please select a excercise type</p>
                }
            </div>


        );

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

    /*
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
        <Dropdown.Item defaultChecked><button onClick={() => setNumber(1)}>Sentence Transformation</button></Dropdown.Item>
        <Dropdown.Item><button onClick={() => setNumber(2)}>Gap Text</button></Dropdown.Item>
        <Dropdown.Item><button onClick={() => setNumber(3)}>Multiple Choice</button></Dropdown.Item>
    </DropdownButton>
    <RenderSwitch />


</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
    <Button type="submit" onClick={number === 1 ? handleAufgabe : handleMultipleChoice} variant="primary">Speichern</Button>

</Modal.Footer>
</Modal>
</>
);
}
*/


    //onClick={() => editTask(t)}
    function Auswertung() {
        
        return (
            <>
                <div>
                    <Button className="button-center" variant="success" onClick={handleShow}>
                        Auswertung anzeigen
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Auswertung:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{prozent}% korrekt gelöst</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
                            <Button variant="secondary" onClick={submitAuswertung}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        );
    }


    const checkMultipleChoice = (e) => {
        e.preventDefault();
        setSubmit(true);
        let temp = isCorrect;
        console.log(mTasks);
        console.log(answers);
        for (let i = 0; i < mTasks.length; i++) {
            temp[i] = mTasks[i].korrekteAntwort === answers[i]
        }
        setIsCorrect(temp);
        console.log(temp);
        countCorrect();
        setChecknumber(4);

        
    }

    const countCorrect = (e) => {
        console.log("Antworten korrigiert:")
        console.log(isCorrect);
        for (let i = 0; i < isCorrect.length; i++) {
            { isCorrect[i] === true ? counter = counter + 1 : counter = counter + 0 }
        }
        console.log("Counter");
        console.log(counter);

        //counter und auth_token ins backend pushen mit exercise id
        //
        setProzent((100 / mTasks.length) * counter);
        console.log("PROZENT:");
        console.log(prozent);
        

        
    }

    const submitAuswertung = () => {

        let authToken = sessionStorage.getItem("Auth Token");
        const object = {
            name: authToken,
            zahl: prozent,
            uebung: {
                id: task
            }
        }

        fetch("http://localhost:3000/api/auswertung/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        }).then(() => {
            console.log("New Auswertung added")
        })

        //window.location.reload();
    }

    function checkSentence() {
        setLNumber(2);
    }


    function DisplayTasks() {
        return (
            tasks[0] ? tasks.map((t, index) => (
                <div className="task" key={index}>
                    <h4>Exercise {index + 1}</h4>
                    <br />
                    <h6>Task definition</h6>
                    <p>{t.aufgabenstellung}</p>
                    <br />
                    <h6>Solution:</h6>
                    <input type="text" className="form-control" id="bem" onChange={(event) => handleChangeLoesung(index, event)}></input>
                    {lnumber === 2 ?
                        <div>
                            <h6>Your answer was: {sentenceAnswers[index]}</h6>
                            <br />
                            <h6>Correct answer:</h6>
                            <p>{t.loesung1}</p>
                            <br />
                            <h6>Alternative solution:</h6>
                            <p>{t.loesung2}</p>
                            <br />
                        </div>
                        : <div>
                        </div>}
                </div>
            )) :
                <div className="task">
                    <p>No Aufgabe yet</p>
                </div>
        );
    }


    const answerChangeHandler = (value, idx, e) => {
        console.log(value, idx);
        let temp = answers;
        temp[idx] = value;
        setAnswers(temp);
    }

    function DisplayMultipleChoices() {
        return (
            mTasks[0] ? mTasks.map((t, index) => (
                <div className="task" key={index}>
                    <h4>Exercise {index + 1}</h4>
                    <br />
                    <h6>Task definition</h6>
                    <p>{t.aufgabenstellung}</p>
                    <div >
                        <input type="checkbox" onChange={(e) => answerChangeHandler(1, index)} value={userAntwort}></input>{t.antwort1}
                        <br />
                        <br />
                        <input type="checkbox" onChange={(e) => answerChangeHandler(2, index)} value={userAntwort}></input>{t.antwort2}
                        <br />
                        <br />
                        <input type="checkbox" onChange={(e) => answerChangeHandler(3, index)} value={userAntwort}></input>{t.antwort3}
                        <br />
                        <br />
                        <p>{submit ? isCorrect[index] ? `Deine Antwort ${answers[index]} war richtig` : `Deine Antwort ${answers[index]} war falsch - Die korrekte Antwort war ${t.korrekteAntwort}` : ""}</p>
                    </div>
                    {Mnumber === 3 ?
                        <div>
                            <br />
                            <h6>Richtige Lösung:</h6>
                            <p>{t.loesung1}</p>
                            <br />
                            <h6>Alternative Lösung:</h6>
                            <p>{t.loesung2}</p>
                            <br />
                        </div>
                        : <div>
                        </div>}
                </div>


            )) :
                <div className="task">
                    <p>No Aufgabe yet</p>
                </div>
        );
    }
    /*
                    <h6>Richtige Antwort:</h6>
                    <p>{t.korrekteAntwort}</p>
    */

    /*
    <div className="task">
              <p>Aufgabe</p>
              <p>My name is _____________ .</p>
              <p>Lösung:</p>
              <input type="text"></input>
              <br/>
          </div>
    */


    // {number === 1 ? <DisplayTasks /> : number === 2 ? <DisplayMultipleChoices /> : <DisplayTasks />}
    return (
        <div>
            <h1>Task</h1>
            <div>
                <br />
                <h4>Sentence Transformations: </h4>
                <DisplayTasks />
            </div>
            <br />
            <div>
                {tasks[0] ? <button className="button-check" onClick={checkSentence}>Check</button> : <div></div>}
                <br />
            </div>
            <br />
            <div>
                <br />
                <h4>Mutlitple Choices: </h4>
                <DisplayMultipleChoices />
            </div>
            <br />
            <div>
                {checknumber === 0 && mTasks[0] ? <div><button className="button-check" onClick={checkMultipleChoice}>Check</button></div> :
                    <div>
                        <Auswertung />
                    </div>}
            </div>
        </div>

    );
}