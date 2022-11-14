import React, { useEffect, useState } from "react";

const PlaceholderAPIPage = () => {

    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setInfo(json));
    })

    return (
        <div>
            <h3>Info</h3>
            {info.map(info => <p>{info.name}</p>)}
        </div>
    )
}

export default PlaceholderAPIPage