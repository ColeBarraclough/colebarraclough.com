import logo from './logo.svg';
import {Home} from './Pages/Home.js'
import './App.css';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { Navbar } from './NavBar/Navbar';
import { Scrollama, Step } from 'react-scrollama';
import {useState} from 'react'
import {useEffect} from 'react'

const hashIndex = {
  1: "Home",
  2: "Projects",
  3: "Contact"
}


function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);


  useEffect(() => {
    window.location.hash = hashIndex[currentStepIndex];
  })
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <Navbar indexSelected={currentStepIndex}/>
      <div className="content">
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1}>
            <div><Home /></div>
          </Step>
          <Step data={2}>
            <div><Projects /></div>
          </Step>
          <Step data={3}>
            <div><Contact /></div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
}

export default App;
