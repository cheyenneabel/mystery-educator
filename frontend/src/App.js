import Footer from './Components/Footer.js'
import Header from './Components/Header.js';
// import {BrowserRouter} from 'react-router-dom'
// import PageSwitch from './PageSwitch'

function App() {
  return (
    <div className="App">
       <BrowserRouter> <Header/>
        <div className="page">

        </div>
        <Footer /> 
        </BrowserRouter>
    </div>
  );
}

export default App;
