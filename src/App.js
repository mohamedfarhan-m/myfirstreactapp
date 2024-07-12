import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import Alert from "./components/Alert";
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
 const [alert,setAlert] = useState(null);
 const showAlert = (message, type)=> {
   setAlert({
         msg: message,
         type: type
     })
     setTimeout(() => {
      setAlert(null);

     },2000)
   }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212311";
      showAlert("Dark Mode has been enabled","success");
      document.title = "Textutils Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success");
      document.title = "Textutils Light Mode"

    }
  };
 

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={ <About />}>
           
      
          </Route>
         
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
         
          </Route>
        </Routes>
       
   
      </Router>

    </>
  );
}

export default App;
