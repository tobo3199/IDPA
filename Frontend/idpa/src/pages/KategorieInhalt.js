import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";
import { useNavigate} from "react-router";

export default function KategorieInhalt(props, { param, RemoveParam }) {
  const { text } = useParams();
  const { theorie } = useParams();
  const [aufg, setAufgabe] = useState();
  const [theorieArray, setTheorieArray] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    param = text;

    console.log(text);
    console.log("Param App: " + param);
    console.log(props);
  }, []);




  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);


    const object = {
      theorie: aufg
    }

    setAufgabe("");

    console.log(object);

    addArray(object);
  }

  const addArray = auf => {
    console.log("Object:")
    console.log(auf);

    const newAuf = [...theorieArray, auf];
    setTheorieArray(newAuf);
    console.log("Array:")
    console.log(...theorieArray, auf);
  }

  const handleAufgabe = e => {
    console.log("called")
    setAufgabe(e.target.value);
  }

  /*
              <div key={index}>
                  <Link to={`/kategorie/${text}/aufgabe/${t.theorie}`}>{t.theorie}</Link>
                  <button className='button-border' type="button" class="btn btn-danger">Delete</button>
              </div>
  */

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);



  return (
    <div>
      <h1>Theorie</h1>
      <div className="file">
        <p>File upload</p>
      </div>
      <h1>Aufgaben</h1>
      <div className="theorie">
        <form className='todo-form' onSubmit={handleSubmit}>
          <input type="text" placeholder="add aufgaben" value={aufg} name="theorie" className="cat-input" onChange={handleAufgabe}></input>
          <button className='cat-button'>Add Aufgabe</button>
        </form>

        <div>
          <table className="table">

            <tr>
              <th>Übersicht</th>
              <th>Aufgabe:</th>
              <th></th>
            </tr>

            {theorieArray?.map((t, index) => (
              <>
                <tr key={index}>
                  <td></td>
                  <td><Link to={`/kategorie/${text}/aufgabe/${t.theorie}`}>{t.theorie}</Link></td>
                  <td><button className='button-border' type="button" class="btn btn-danger">Delete</button></td>
                </tr>


              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}