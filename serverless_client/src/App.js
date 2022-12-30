import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Step1 from './Components/Step1'
import Step2 from './Components/Step2';
import { SmallestNumberOfClasses } from './ClassData/SmallestNumberOfClasses';
import './App.css';

function App() {

  const [step, setStep] = useState(1);
  const classAlgo = useRef(new SmallestNumberOfClasses());

  function addTracks(tracks) {
    for (const elem of tracks) {
      classAlgo.current.addTrack(elem);
    }
    classAlgo.current.addRequiredAndElectives();
    setStep(step + 1);
    console.log(classAlgo.current)
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#918f90'
  }, [])


  function addCourses(courses) {
    for (const course of courses) {
        classAlgo.current.addCourse(course);
    }

    setStep(step + 1);
  }

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

            {step === 2 ? <Step2 handleCourseAdding={addCourses} electives = {[...classAlgo.current.totalElectives]}/> : <></>}

           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
