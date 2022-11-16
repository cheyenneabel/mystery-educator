import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">
        <h3 id="welcomeMessage">Welcome to the Main Page </h3>

        <NavLink id='cryptid' to='/cryptid'>Cryptids</NavLink>

        <NavLink id='bored' to='/bored'>BoredAPI</NavLink>

        <div id="toRemoveWhenMetMuseumIsAdded"></div>
        {/* <NavLink to='/metmuseum'></NavLink> */}

        <NavLink id='javengers' to='/javengers'>Javengers</NavLink>

        <NavLink id='jac' to='/jacContact'>Jac Enterprises</NavLink>

    </section>

)

export default MainPage