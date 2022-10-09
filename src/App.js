
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
 import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//main function
function App() {
  //dark mode setting
  const [mode, setmode] = useState('light')

  const togglemode= ()=>{ 
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black'
      showalert("dark mode has been enabled!","success")
    }
    else{
      setmode('light');
      
      document.body.style.backgroundColor='white'
    }
  }
  //////////////////////////////////////////////////////////////////

  //alert message setting

  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
          setalert({
            msg:message,
            type:type
          })
          setTimeout(() => {
            setalert(null);
          }, 1000);

  }  
  return (
  <>
      {/* <Navbar title="textUtils" home="Home" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container">
     
      <Textform mode={mode} showalert={showalert} /> 
  </div> 
    {/* <About/> */}
    

<Router>
     <Navbar title="textUtils" home="Home" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/* <Textform mode={mode} showalert={showalert} /> */}
        <Routes>
        
          <Route exact path="/" element={<Textform mode={mode} showalert={showalert} /> }/>
          <Route exact path="/About" element={<About/>}/>
        
        </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
