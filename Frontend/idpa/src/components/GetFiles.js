import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';

function GetFiles() {

    const [images, setImages] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        handleGetFiles();
    }, [])

    const handleGetFiles = () => {
        fetch("http://localhost:3000/api/fileData/files")
            .then(res => res.json())
            .then((result) => {
                setImages(result);
            })

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
        <div>
            {images.map(image =>
                <div key={image.id}>
                    <p >{image.id}</p>
                    <p>{image.fileDataName}</p>
                    <img src={`http://localhost:3000/api/fileData/files/${image.id}`} />
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(image.id)}>
                        Delete
                    </Button>
                </div>

            )}
        </div>

    );
}

export default GetFiles;