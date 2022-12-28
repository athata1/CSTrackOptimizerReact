import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';

function App() {

  const [step, setStep] = useState(1);

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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
