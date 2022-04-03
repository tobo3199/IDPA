import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

function GetFiles() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/fileData/files")
            .then(res => res.json())
            .then((result) => {
                setImages(result);
            }
            )
    }, [])

    return (
        <div>
            {images.map(image =>
                <div key={image.id}>
                    <p >{image.id}</p>
                    <p>{image.fileDataName}</p>
                    <img src={`http://localhost:8080/api/fileData/download/${image.id}`} />
                </div>

            )}
        </div>

    );
}

export default GetFiles;