import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MetMuseumAPI = () => {
    const [artwork, setArtwork] = useState({});

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/65576')
        .then((response) => response.json())
        .then((json) => setArtwork(json));
    
    }, [])

    //variable handles one object. each function handles each variable.

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
                            The artist's name is: {artwork.artistDisplayName}
                        </p>
                        <p>
                           This piece was created in the year {artwork.objectBeginDate} 
                        </p>
                        <p>
                            <a href={artwork.objectURL}>Click here for more info about this piece of art</a>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MetMuseumAPI