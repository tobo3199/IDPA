import React from "react";
import { useParams } from "react-router";

export default function Theorie(props){
    const { text } = useParams();

    console.log(text);
    console.log(props);

    return (
        <div>
            <h1>Theorie Seite</h1>
        </div>
    )
}