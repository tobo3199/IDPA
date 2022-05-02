import { useState } from "react";
import { useParams } from "react-router";
import '../App.css';
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useEffect } from "react";
import "../kategorie.css";

export default function MEdit(mid) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [uebungO, setUebungO] = useState();
    const { aufgabe } = useParams();

    var mauf = "";
    var ml1 = "";
    var ml2 = "";
    var ml3 = "";
    var l = 0;

    const handleMedit = (idx, e) => {

        const object = {
            aufgabenstellung: mauf,
            antwort1: ml1,
            antwort2: ml2,
            antwort3: ml3,
            korrekteAntwort: l
        }



        //addArrM(mobject)

        fetch("http://localhost:3000/api/multiplechoice/" + idx.mid, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        }).then(() => {
            console.log("Multiple-Choice updated ")
        })

        window.location.reload();


    }

    useEffect(() => {

        fetch('http://localhost:3000/api/uebung/id/' + aufgabe, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                setUebungO(result);

            }
            )
    }, []);

    const handleChangeAufgaben = (e) => {
        //setBem(e.target.value);
        mauf = e.target.value;

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
        ml3 = e.target.value;
    }

    const handleCheckLoesung = (e) => {
        l = e.target.value;
    }

    return (
        <>

            {/* <div className="centering"> */}
                <button className="btn-add" onClick={handleShow}>
                    Edit
                </button>
            {/* </div> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Multiple-Choice Edit:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={() => handleMedit(mid)}>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Multiple-Choice: </label>
                            <br />
                            <label htmlFor="recipient-name" className="col-form-label">Aufgabenstellung: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeAufgaben} ></input>
                        </div>
                        <div>
                            <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 1: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung1}></input>
                            <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 2: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung2}></input>
                            <label htmlFor="recipient-name" className="col-form-label">Mögliche Antwort 3: </label>
                            <input type="text" className="form-control" id="bem" onChange={handleChangeLoesung3} ></input>
                            <label htmlFor="recipient-name" className="col-form-label">Richtige Antwort: </label>
                            <br />
                            <input type="number" id="bem" onChange={handleCheckLoesung} min="1" max="3" ></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Schliessen</Button>
                    <Button type="submit" onClick={() => handleMedit(mid)} variant="primary">Edit</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}