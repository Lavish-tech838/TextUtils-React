import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Todo from "./components/Todo";
import React, { useState } from 'react'
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtiles"/> */}
      {/* <ul role="list"
       className="todo-list stack-large stack-exception"
       area-labelledby="list-heading"
   >
  <Todo/>
  <Todo/>
   <Todo/>
   </ul> */}
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
