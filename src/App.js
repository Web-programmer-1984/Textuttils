
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [modeName, setModeName] = useState('Enter dark mode')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = (cls ) => {

    if (mode === 'light') {
      setMode('dark');
      setModeName('Enter to light mode');
      document.body.style.background = '#343b42';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setModeName('Enter to Dark mode')
      setMode('light')
      document.body.style.background = '#e6e8eb';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeName={modeName}></Navbar>
        {/* <div className="container"><Textform heading="Enter the text to analyze !"></Textform></div> */}
        <Alert ans={alert}></Alert>
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <Textform showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
