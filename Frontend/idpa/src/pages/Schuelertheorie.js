import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { useNavigate } from "react-router";
import "../kategorieinhalt.css";
import GetFiles from '../components/GetFiles';
import UploadFile from '../components/UploadFile';
import { Container, Row, Col } from "react-bootstrap";

export default function Schuelertheorie(props) {
  const { ide } = useParams();
  //const { grammarTopic } = useParams();
  const [aufg, setAufgabe] = useState();
  const [theorieArray, setTheorieArray] = useState([]);
  const [grammatikthemas, setGrammatikthemas] = useState([]);
  const [fetchObject, setFetchObject] = useState();
  //const [objectid, setObjectid] = useState(ide - 1);
  let navigate = useNavigate();
  
  console.log(ide);


  /*
  useEffect(() => {
    
    param = id;

    console.log(id);
    console.log("Param App: " + param);
    console.log(props);
    
  }, []);
  */



  const handleSubmit = e => {

    console.log(e.target.value);


    /*
    fetch('http://localhost:3000/api/uebung/id/' + ide, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setFetchObject(result);
      }
      )
      */

    const uebung = {
      name: aufg,
      grammatikThema: {
        id: fetchObject.id,
        name: fetchObject.name,
        pin: fetchObject.pin
      }

      /*
      grammatikthema : {
        name : fetchObject.name,
        pin : fetchObject.pin
      }
      */
    }

    setAufgabe("");

    console.log(uebung);

    addArray(uebung);

    fetch("http://localhost:3000/api/uebung/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uebung)

    }).then(() => {
      console.log("New Uebung added")
    })

    window.location.reload();
  }

  const addArray = auf => {
    /*
    console.log("Object:")
    console.log(auf);

    

    const newAuf = [...theorieArray, auf];
    setTheorieArray(newAuf);
    console.log("Array:")
    console.log(...theorieArray, auf);
    */
  }

  const handleAufgabe = e => {
    setAufgabe(e.target.value);
  }

  /*
  const handleDelete = (id, e) => {

    fetch('http://localhost:3000/api/uebung/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        console.log("Uebung " + id + " deleted")
      })

    window.location.reload();
  }
  */
  /*
              <div key={index}>
                  <Link to={`/kategorie/${text}/aufgabe/${t.theorie}`}>{t.theorie}</Link>
                  <button className='button-border' type="button" class="btn btn-danger">Delete</button>
              </div>
  */

  useEffect(() => {

    
    let authToken = sessionStorage.getItem("Auth Token");

    /*
    if (!authToken) {
      navigate("/login");
    }
    */


    //Umändern!!!

    /*
    fetch('http://localhost:3000/api/grammatikthema/id/' + ide, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setFetchObject(result);
      }
      )
      */

    fetch("http://localhost:3000/api/uebung/" + ide)
      .then(res => res.json())
      .then((result) => {
        setTheorieArray(result);
        console.log("Übungen GET:");
      }
      )

      console.log(theorieArray);
      




  }, []);



  /*
  <form action="/action_page.php">
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
          </form>
  */



  return (
    <div className="body-theorie">
      <h1>Theorie</h1>
      <div className="file">
        <Container>
          <Row>
            <GetFiles />
          </Row>
        </Container>
      </div>
      <h1>Aufgaben</h1>
      <div className="theorie">
        <br/>
        <div>
          <table className="table">

            <tr>
              <th>Übersicht</th>
              <th>Aufgabe:</th>
            </tr>

            {theorieArray?.map((t, index) => (
              <>
                <tr key={index}>
                  <td></td>
                  <td><Link to={`/grammartopic/${ide}/exercise/${t.id}`}>{t.name}</Link></td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}