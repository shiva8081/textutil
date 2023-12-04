// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';

import Textform from './Components/Textform';
import Bout from './Components/Bout';
import { useState } from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';






function App() {
  const [mode, setmode] = useState('light')
  const [color, setcolor] = useState('#050b59')
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = color;
      ssalert("dark mode enable", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      ssalert("light mode enable", "success");

    }
  }
  const [alert, setalert] = useState(null);
  const ssalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
      <BrowserRouter>

        <Navbar title='textutils' about='About' home='Home' mode={mode} set={setcolor} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<Bout />}>

          </Route>
          <Route exact path="/" element={<Textform heading='enter the text to analyze' mode={mode} />}>

          </Route>
        </Routes>
        {/* <Textform heading='enter the text to analyze' mode={mode}/><br/> */}
        {/* <Bout/> */}
      </BrowserRouter>

    </>
  );
}

export default App;
