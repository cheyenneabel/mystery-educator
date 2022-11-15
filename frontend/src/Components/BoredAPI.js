import React, { useState, useEffect } from "react";

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
            <p>BoredAPI</p>
            {
                (loading ? <h3>Loading...</h3> : (
                    <div>
                        <h3>
                        {activity.activity}
                        </h3>
                        <p>
                            {activity.type}
                        </p>
                        <p>
                            {activity.participants}
                        </p>
                        <p>
                            {activity.price}
                        </p>
                        <p>
                            {activity.key}
                        </p>
                        <p>
                            {activity.accessibility}
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
