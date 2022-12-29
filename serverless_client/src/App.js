import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Step1 from './Components/Step1'
import { SmallestNumberOfClasses } from './ClassData/SmallestNumberOfClasses';
import './App.css';

function App() {

  const [step, setStep] = useState(1);
  const classAlgo = useRef(new SmallestNumberOfClasses());

  function addTracks(tracks) {
    for (const elem of tracks) {
      classAlgo.current.addTrack(elem);
    }
    setStep(step + 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#918f90'
  }, [])


  return (
    <>
      <Navbar/>
      <div id="box">
        <div className="container">
          <div className='margin'>
            <div className="step">
              Step {step}
            </div>
            {step === 1 ? <Step1 addTracksCallback={addTracks}/> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
