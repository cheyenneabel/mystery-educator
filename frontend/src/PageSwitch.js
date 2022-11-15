import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage';
import BoredAPI from './Components/BoredAPI';
import Cryptid from './Components/CryptidAPI';
import JavengersContactPage from './Components/JavengersContactPage';
import jacContactPage from './Components/JacContactPage';

//import all components (minus header and footer)

const PageSwitch = () => { 

    return (
        <Switch>
            <Route exact path = "/" component={MainPage} />
            <Route exact path = "/cryptid" component= {Cryptid} />
            <Route exact path = "/bored" component={BoredAPI} />

            {/* 
            <Route exact path = "/placeholderAPI" component= 
            
            */}
            
            <Route exact path = "/javengers" component={JavengersContactPage} />
            <Route exact path = "/jacContact" component={jacContactPage} />

        </Switch>
    )
}

export default PageSwitch;