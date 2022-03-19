import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import React from "react";


export default function KategorieInhalt(props){
    const { text } = useParams();
    const { theorie } = useParams();
    const [aufg, setAufgabe]  = useState();
    const [theorieArray, setTheorieArray] = useState([{text: 123}]);

    console.log(text);
    console.log(props);

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
        console.log( ...theorieArray, auf);
    }

    const handleAufgabe = e => {
      console.log("called")
      setAufgabe(e.target.value);
    }



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
          {theorieArray?.map((t, index) => (
                <div key={index}>
                    <Link to={`/kategorie/${text}/aufgabe/${t.theorie}`}>{t.theorie}</Link>
                </div>
            ))}
        </div>
      </div>
    );
}