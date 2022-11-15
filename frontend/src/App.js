import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Aboutpage from './Components/Aboutpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/Aboutpage" component={Aboutpage} />
        
        <Aboutpage />

      </div>
    </Router>
  );
}


export default App;
