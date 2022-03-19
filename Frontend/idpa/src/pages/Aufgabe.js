import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { Modal, Button } from 'react-bootstrap';


export default function Aufgabe(props){
    const { aufgabe } = useParams();
    const [tasks, setTasks] = useState([]);

    console.log(aufgabe);
    console.log(props);

    return (
        <div>
          <h1>Aufgabe</h1>
          <div className="task">
              <p>Aufgabe</p>
              <p>My name is _____________ .</p>
              <p>Lösung:</p>
              <input type="text"></input>
              <br/>
          </div>
          <br/>
          <div>
          <Button className="button-center" variant="success">Success</Button>{' '}
          </div>
          </div>
    );
}