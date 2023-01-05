import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Step1 from './Components/Step1'
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import { SmallestNumberOfClasses } from './ClassData/SmallestNumberOfClasses';
import { Database } from './ClassData/Database';
import {CSSTransition} from 'react-transition-group'
import './App.css';

function App() {

  //Current Step number
  const [step, setStep] = useState(1);

  //Whether or not to load on 3rd Step page
  const [loading, setLoading] = useState(false);

  const [currentHeight, setCurrentHeight] = useState(500);

  //Instructions for each page
  const [instructions] = useState(["Click one or more track names to select/deselect", "Click on the classes you have taken or want to take to automatically put courses in result. When you are done, press Next", "Look at the final results located below. These courses are the smallest number of courses required to finish the selected tracks."])

  //Class algorithm to be used through the app
  const classAlgo = useRef(new SmallestNumberOfClasses());

  //Result to be sent to step 3
  let finalResult = useRef([]);

  //Add tracks that were selected in Step 1
  function addTracks(tracks) {
    for (const elem of tracks) {
      classAlgo.current.addTrack(elem);
    }
    classAlgo.current.addRequiredAndElectives();
    setStep(step + 1);
  }

  //Change background color once app renders
  useEffect(() => {
    document.body.style.backgroundColor = '#918f90'
  }, [])


  //Add courses that were selected in Step 2
  function addCourses(courses) {
    setLoading(true);
    setStep(step + 1);
    for (const course of courses) {
        classAlgo.current.addCourse(course);
    }
    finalResult.current = classAlgo.current.getMinClasses();
    finalResult.current.sort((a,b) => Database.getCourse(a).localeCompare(Database.getCourse(b)))
    setLoading(false);
  }

  return (
    <>
      <Navbar/>
      <div id="box">
        <div className="container">
          <div className="step">
            Step {step}
          </div>
          <div className="instructions">{instructions[step - 1]}</div>

          <div className='step-container' style={{height: currentHeight}}>
            <CSSTransition
              in={step === 1}
              unmountOnExit
              timeout={500}
              classNames="step">
              <div className='step-initial'>
                <Step1 addTracksCallback={addTracks} setHeightCallback={setCurrentHeight}/>
              </div>
            </CSSTransition>
            <CSSTransition
              in={step === 2}
              unmountOnExit
              timeout={500}
              classNames="step">
              <div className='step-initial'>
                <Step2 setHeightCallback={setCurrentHeight}handleCourseAdding={addCourses} electives = {[...classAlgo.current.totalElectives]}/>
              </div>
            </CSSTransition>
            <CSSTransition
              in={step === 3}
              unmountOnExit
              timeout={500}
              classNames="step">
              <div className='step-initial'>
                <Step3 setHeightCallback={setCurrentHeight} courseAlgo={classAlgo} loading={loading} finalCourseArray={finalResult}/> 
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
