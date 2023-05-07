import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes, //instead of switch
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success")
      document.body.style.background = "#121630"
      document.body.style.color = "white"
    }
    else {
      setMode("light")
      showAlert("Light mode has been enabled", "success")
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
