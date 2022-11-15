import React, { useEffect, useState } from "react";

const MetMuseumAPI = () => {

    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isOnView=true&q=mythology')
        .then((response) => response.json())
        .then((json) => setArtwork(json));
    
    }, [])

    if(activity){
        var loading = false
        }
    return (
        <div>
            <p>MetMuseumAPI</p>
            {
                (loading ? <h3>Loading...</h3> : (
                    <div>
                        <h3>
                            {artwork.title}
                        </h3>
                        <p>
                            {artwork.primaryImage}
                        </p>
                        <p>
                            {artwork.artistDisplayName}
                        </p>
                        <p>
                           {artwork.objectBeginDate} 
                        </p>
                        <p>
                            {artwork.objectURL}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MetMuseumAPI