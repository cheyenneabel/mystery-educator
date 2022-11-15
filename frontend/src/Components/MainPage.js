import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">
        <h3 id="welcomeMessage">Welcome to the Main Page </h3>

        <NavLink id='cryptid' to='/cryptid'>Cryptids</NavLink>

        <NavLink id='bored' to='/bored'>BoredAPI</NavLink>

        <NavLink id='museum' to='/museum'>MetMuseumAPI</NavLink>

        <NavLink id='javengers' to='/javengers'>Javengers</NavLink>

        <div id='jac'></div>

    </section>

)

export default MainPage