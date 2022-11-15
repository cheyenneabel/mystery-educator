import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage';
import BoredAPI from './Components/BoredAPI';
import Cryptid from './Components/CryptidAPI';
import JavengersContactPage from './Components/JavengersContactPage';
import MetMuseumAPI from './Components/MetMuseumAPI';

//import all components (minus header and footer)

const PageSwitch = () => { 

    return (
        <Switch>
            <Route exact path = "/" component={MainPage} />
            <Route exact path = "/cryptid" component= {Cryptid} />
            <Route exact path = "/bored" component={BoredAPI} />
            <Route exact path = "/museum" component={MetMuseumAPI} />
            <Route exact path = "/javengers" component={JavengersContactPage} />

        </Switch>
    )
}

export default PageSwitch;