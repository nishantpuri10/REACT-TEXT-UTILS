import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [modetext , setmodetext] = useState('Enable DarkMode');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2C2A2A';
      setmodetext('Enable LightMode');
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setmodetext('Enable DarkMode');
      
    }
  }

  return (
    <>
    
    <Router>
    <Navbar title="TextUtils2" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} modetext={modetext}/>
    
    
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <div align = "center" >
    <Form  mode={mode} />
    </div>
          </Route>
        </Switch>
    
    
    </Router>
   </>
  );
}

export default App;
