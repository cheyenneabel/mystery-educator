import React, { useState, useEffect } from "react"


const Cryptid = () => {
    const [creature, setCreature] = useState({})

    useEffect(() => {
        fetch('http://localhost:8080/cryptid')
        .then()
    })

    return(
        <div>

        </div>
    )
}



export default Cryptid;