import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (    
    <>
      <Navbar aboutText = "About the Site"/>
      <div className="container my-3">
        {/* <About/> */}
      <TextForm heading = "Enter the text to Analyze" />
      </div>     
    </> 
  );
}

export default App;
