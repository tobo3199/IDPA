import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';
import "../kategorie.css";
import '../App.css';
import "./CSS/getfiles.css";

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
        fetch("https://limitless-fortress-25619.herokuapp.com/api/fileData/" + ide.id)
            .then(res => res.json())
            .then((result) => {
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

    return (
        <div className='get-container'>
            {images[0] ?  images.map(image =>
                <div key={image.id}>
                    <img className='get-img' src={`https://limitless-fortress-25619.herokuapp.com/api/fileData/files/${image.id}`} />
                </div>

            ) : <div></div>}
        </div>

    );
}

export default SchuelerFiles;