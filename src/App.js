import { useState } from 'react';
import './App.css';

import Textforms from './components/Textforms';
import Navbar from './components/Navbar';
import About from './components/About';
// import Alert from './components/Alert';
import Home from './components/Home';
 
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App(){

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const togglemode = ( cls) => {
    
    console.log(cls)
    document.body.classList.remove('bg-light', 'bg-dark', 'bg-primary', 'bg-success', 'bg-danger', 'bg-warning');
    document.body.classList.add('text-bg-' + cls);
   
  
  }
  return (
    

  
    <BrowserRouter>
      <Navbar title="Navbar" aboutText="About" mode={mode} togglemode={togglemode} />
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
      <Routes>
          <Route exact path="about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="home" element={<Home />}>
          </Route>
          <Route exact path="/" element = {<Textforms  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
{/* <About/> */}


  
 
 
}

export default App;
