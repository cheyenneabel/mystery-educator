import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MetMuseum.css'

const MetMuseumAPI = () => {

    const[artwork, setArtwork] = useState({});

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isOnView=true&q=mythology')
            .then((response) => response.json())
            .then((res) => {
               let randomIndex = Math.floor(Math.random() * 354);
               let randomId = res.objectIDs[randomIndex];
               console.log(randomId)

            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`)    
                .then((response) => response.json())
                .then((json) => setArtwork(json));

            })
            
        
    
    }, [])



    if(artwork){
        var loading = false
        }

    return (
        <div>
            <h3>MetMuseumAPI</h3>
            
            <p>"{artwork.title}"</p>
                
            <p>
                <img className="Picture" src={artwork.primaryImage} width="" height="" alt="artImage"/>
            </p>
            
            <div className="Words">
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

            <button onClick={() => window.location.reload(true)}>Another</button>
            </div>
        </div>

    )
}
            

export default MetMuseumAPI