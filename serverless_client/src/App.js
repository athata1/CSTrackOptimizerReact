import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Step1 from './Components/Step1'
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import { SmallestNumberOfClasses } from './ClassData/SmallestNumberOfClasses';
import { Database } from './ClassData/Database';
import './App.css';

function App() {

  //Current Step number
  const [step, setStep] = useState(1);

  //Whether or not to load on 3rd Step page
  const [loading, setLoading] = useState(false);

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
    console.log(classAlgo.current)
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
    console.log("Here: " + classAlgo.current.totalElectives);
    finalResult.current = classAlgo.current.getMinClasses();
    finalResult.current.sort((a,b) => Database.getCourse(a).localeCompare(Database.getCourse(b)))
    setLoading(false);
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
            <div className="instructions">{instructions[step - 1]}</div>
            {step === 1 ? <Step1 addTracksCallback={addTracks}/> : <></>}

            {step === 2 ? <Step2 handleCourseAdding={addCourses} electives = {[...classAlgo.current.totalElectives]}/> : <></>}

            {step === 3 ? <Step3 courseAlgo={classAlgo} loading={loading} finalCourseArray={finalResult}/> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
