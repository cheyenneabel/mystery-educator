import React, { useState, useEffect } from "react";
import './Bored.css';


 const BoredAPI = () =>{
    const[activity, setActivity] = useState({});
    //const[loading, setLoading] = useState(true); // DO NOT DO
    useEffect(() =>{
        fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((json) => setActivity(json));    
    }, [])
    
    if(activity){
        //setLoading(() => { return false;}); // DO NOT DO
        // console.log(activity)
        var loading = false
        }
    return(
        <div>
            <h2>Bored API</h2>
            {
                (loading ? <h3>Loading...</h3> : (
                    <div id='boredActivityArea'>
                        <h1 id='boredActivity'>
                        {activity.activity}
                        </h1>
                        <p>
                            Type: {activity.type}
                        </p>
                        <p>
                            Participants: {activity.participants}
                        </p>
                        <p>
                            Price Index: {activity.price}
                        </p>
                        <p>
                            Accessibility Index: {activity.accessibility}
                        </p>
                        <p>
                            Bored API Key:{activity.key}
                        </p>

                        {/* {
                            if(activity.link !== null){
                                <a href ={`${activity.link}`} ></a>
                            }
                        } */}
                        
                    </div>
                ))
            }
        </div>
    )
 }
 export default BoredAPI;
