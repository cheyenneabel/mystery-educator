import React, { useState, useEffect } from "react"


const Cryptid = () => {
    const [creature, setCreature] = useState({})

    useEffect(() => {
        fetch('http://localhost:8080/random/cryptid')
        .then((response) => response.json())
        .then((json) => setCreature(json))
    })
    if(creature){
        var loading = false
    }
    return(
        <div>
            {
                (loading ? <h3>Loading...</h3> : (
                    <div>
                        <h2>{creature.name}</h2>
                        <p>{creature.description}</p>
                    </div>
                ))
            }
        </div>
    )
}



export default Cryptid;