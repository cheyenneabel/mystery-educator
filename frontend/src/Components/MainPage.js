import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">
        <h3 id="welcomeMessage">Welcome to the Main Page </h3>

        <NavLink id='cryptid' to='/cryptid'>Cryptid Corner</NavLink>

        <NavLink id='bored' to='/bored'>Goodbye, Boredom</NavLink>

        <NavLink id='museum' to='/museum'>Art Around the World</NavLink>

        <NavLink id='javengers' to='/javengers'>Javengers</NavLink>

        <NavLink id='jac' to='/jacContact'>Jac Enterprises</NavLink>

    </section>

)

export default MainPage