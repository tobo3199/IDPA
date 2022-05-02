import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Container, Paper, Button } from '@material-ui/core';
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import "../kategorie.css";
import '../App.css';
import "./CSS/getfiles.css";
//import { Row } from 'react-bootstrap';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function GetFiles(ide) {

    const [images, setImages] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        handleGetFiles();
    }, [])

    const handleGetFiles = () => {
        fetch("http://localhost:3000/api/fileData/" + ide.id)
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
        fetch('http://localhost:3000/api/fileData/files/' + id, {
            method: 'DELETE'
        })
            .then(() => setStatus('Delete successful'))
            .then(() => handleGetFiles());

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }


    {/* <Carousel.Caption> */ }
    {/* <h3>{image.fileDataName}</h3>
                            <p>{image.id}</p> */}
    {/* </Carousel.Caption> */ }
    {/* <button className="btn-delete" onClick={() => handleDelete(image.id)}>Delete</button> */ }
console.log(images);
    return (
        // <div>
        //     {images[0] ? images.map(image =>
        //     <Carousel key={image}>
        //             <Carousel.Item key={image}>
        //                 <img className='get-img' src={`http://localhost:3000/api/fileData/files/${image.id}`} />
        //             </Carousel.Item>
        //     </Carousel>
        //     ) : <div></div>}
        // </div>
        <div className="slide-container">
        {/* <Slide>
         {images[0] ? images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <img className='get-img' src={`http://localhost:3000/api/fileData/files/${slideImage.id}`} />
            </div>
          )): <div></div>} 
        </Slide> */}
        <Fade>
        <div className="each-fade">
          <img src={`http://localhost:3000/api/fileData/files/${images[0].id}`} />
        </div>
        <div className="each-fade">
          <img src={`http://localhost:3000/api/fileData/files/${images[1].id}`} />
        </div>
        <div className="each-fade">
          <img src={`http://localhost:3000/api/fileData/files/${images[2].id}`} />
        </div>
      </Fade>
      </div>

    );
}

export default GetFiles;