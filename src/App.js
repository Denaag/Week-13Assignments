import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Button, Alert, Row, Col} from "react-bootstrap";
import Navb from './components/nav';
import {Login} from './Login';
import {Register} from './Register';

function App() {
  
  const [currentForm, setCurrentForm] = useState('login'); //allows page to start on current login page

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <Navb />
    <div className="App">
      
      <div className='RegisterForm'>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/> //this is treated as if statement and allows you to toggle between pages
        }
      </div>
    </div>
    </>
  );
}

export default App;
