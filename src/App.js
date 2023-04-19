import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
} from "react-router-dom"

import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
   
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor= '#ffffff'
      document.body.style.color = '#000000';
      showAlert("Enabling Light Mode", "success");
      document.title = 'Text Utils - Light Mode';
    }else{
      setMode('dark');
      document.body.style.backgroundColor= 'grey'
      document.body.style.color = '#ffffff';
      showAlert("Enabling Dark Mode", "danger");
      document.title = 'Text Utils - Dark Mode';
    }
  }

  return (    
    <>
    <Router>
      <Navbar aboutText = "About the Site" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <About/> */}
        {/* <TextForm showAlert={showAlert} heading = "Enter the text to Analyze" mode={mode}/> */}
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to Analyze" mode={mode}/>} />
    </Routes>
      </div> 
      </Router>    
    </> 
  );
}

export default App;
