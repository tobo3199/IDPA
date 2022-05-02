import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Container, Paper, Button } from '@material-ui/core';
import { Container, Row, Col } from "react-bootstrap";
import "../kategorie.css";
import '../App.css';
import "./CSS/getfiles.css";
//import { Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function GetFiles(ide) {

    const [images, setImages] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        handleGetFiles();
    }, [])

    const handleGetFiles = () => {
        fetch("https://limitless-fortress-25619.herokuapp.com/api/fileData/" + ide.id)
            .then(res => res.json())
            .then((result) => {
                console.log("Result:");
                console.log(result);
                setImages(result);
            })

        // window.location.reload();
    }

    const handleDelete = (id) => {
        // DELETE request using fetch inside useEffect React hook
        fetch('https://limitless-fortress-25619.herokuapp.com/api/fileData/files/' + id, {
            method: 'DELETE'
        })
            .then(() => setStatus('Delete successful'))
            .then(() => handleGetFiles());

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    /*
                    <div key={image.id}>
                        <p >{image.id}</p>
                        <p>{image.fileDataName}</p>
                        <img className='get-img' src={`http://localhost:3000/api/fileData/files/${image.id}`} />
                        <button className="btn-delete" onClick={() => handleDelete(image.id)}>Delete</button>
                    </div>
                    <button className="btn-delete" onClick={() => handleDelete(image.id)}>Delete</button>
    */

    return (
        <Carousel className='boxfile'>
            {images[0] ? images.map((image, index) =>
                    <div key={index}>
                        <img className='get-img' src={`https://limitless-fortress-25619.herokuapp.com/api/fileData/files/${image.id}`} />
                    </div>
            ) : <div></div>}
        </Carousel>

    );
}

export default GetFiles;