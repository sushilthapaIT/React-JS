import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Tem from './components/Tem.js';

function App() {
  return (
    <>
    <Navbar title="Sushil"  aboutText="This is"/>

    <div className = "container my-3">

      <TextForm heading = "Enter the text to analyze below"/>
    </div>

    <Tem headinggg="hello" />
    </>

  );
}

export default App;
