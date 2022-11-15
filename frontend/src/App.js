import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer.js'
import Header from './Components/Header.js';
import PageSwitch from './PageSwitch.js';

function App() {
  return (

    <div className="App">
      <BrowserRouter>

          <Header/>

          <div className="page">
            <PageSwitch />
          </div>

          <Footer /> 
          
        </BrowserRouter>
    </div>

  );
}

export default App;
