import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MetMuseumAPI = () => {
    const [artwork, setArtwork] = useState({});

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/65576')
        .then((response) => response.json())
        .then((json) => setArtwork(json));
    
    }, [])

    if(artwork){
        var loading = false
        }
    return (
        <div>
            <p>MetMuseumAPI</p>
            {
                (loading ? <h3>Loading...</h3> : (
                    <div>
                        <h3>
                            "{artwork.title}"
                        </h3>
                        <p>
                            <img src={artwork.primaryImage} width="" height="" alt="artImage"/>
                        </p>
                        <p>
                            The artist's name, if we know it, is: {artwork.artistDisplayName}
                        </p>
                        <p>
                            This art is from: {artwork.culture}
                        </p>
                        <p>
                           This piece was created in the year {artwork.objectBeginDate} 
                        </p>
                        <p>
                            <a href={artwork.objectURL} target="_blank">Click here to learn more about this piece of art</a>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MetMuseumAPI