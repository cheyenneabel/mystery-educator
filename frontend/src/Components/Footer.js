import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'

// function change_page(){
//     window.location.href = "index.html"
//     console.log("button")
// }
const Footer = () => {
   
    return(<div>
       {/* <input type="button" value="create page" onClick={change_page}/>*/}
       <NavLink to='/jacContact'> Contact Us </NavLink>
        <small>&copy; javengers 2022 </small>
    </div>)
    
}

export default Footer;