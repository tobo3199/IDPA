import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';
import "../kategorie.css";
import '../App.css';
import "./CSS/getfiles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SchuelerFiles(ide) {

    const [images, setImages] = useState([]);
    const [status, setStatus] = useState('');
    const [imageId, setImageId] = useState(0);

    useEffect(() => {
        handleGetFiles();
    }, [])

    const handleGetFiles = () => {
        console.log("Grammatikthema");
        console.log(ide);
        fetch("http://localhost:3000/api/fileData/" + ide.id)
            .then(res => res.json())
            .then((result) => {
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

    return (
        <Carousel className='boxfile'>
        {images[0] ? images.map((image, index) =>
                <div key={index}>
                    <img className='get-img' src={`http://localhost:3000/api/fileData/files/${image.id}`} />
                </div>
        ) : <div></div>}
    </Carousel>

    );
}

export default SchuelerFiles;