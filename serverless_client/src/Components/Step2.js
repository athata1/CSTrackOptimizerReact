import React, {useState} from 'react'
import { Database } from '../ClassData/Database';
export default function Step2({handleCourseAdding, electives}) {

  //Courses that are to be added to class
  const [addedCourses, setAddedCourses] = useState([]);

  //Electives that can be added to the final result
  const [modifiedElectives, setModifiedElectives] = useState([...electives]);


  //This method switches the course from modifiedElectives to addedCourses
  function addCourse(courseNum) {
      const newAddedCourse = [...addedCourses];
      newAddedCourse.push(courseNum);

      const newModifiedElectives = [...modifiedElectives];
      newModifiedElectives.splice(newModifiedElectives.indexOf(courseNum), 1)
      setAddedCourses(newAddedCourse)
      setModifiedElectives(newModifiedElectives)
  }

  //This method switches the course from addedCourses to modifiedElectives
  function removeCourse(courseNum) {
    const newAddedCourse = [...addedCourses];
    newAddedCourse.splice(newAddedCourse.indexOf(courseNum), 1)

    const newModifiedElectives = [...modifiedElectives];
    newModifiedElectives.push(courseNum);

    setAddedCourses(newAddedCourse)
    setModifiedElectives(newModifiedElectives)
}

  return (
    <div className="content">
        <div id="courses">
          {modifiedElectives.map((courseNum) => {
            return <div key={courseNum} className="course" onClick={() => {addCourse(courseNum)}}>
              <div className="course-abbr">
                {Database.getCourse(courseNum)}
              </div>
              <div>
                {Database.getAbbr(courseNum)}
              </div>
            </div>
          })}
        </div>
        <div style={{fontSize: '2rem', marginBottom: '10px'}}>Added courses:</div>

        <div id="added">
          {addedCourses.map((courseNum) => {
            return <>
            <div key={courseNum} className="removed-container">
              <div className="course">
                <div className="course-abbr">
                  {Database.getAbbr(courseNum)}
                </div>
                <div>
                  {Database.getCourse(courseNum)}
                </div>
              </div>
              <div className="x" onClick={() => {removeCourse(courseNum)}}>X</div>
            </div>
            </>
        })}
        </div>
        <button id = "step-2" className="submit" onClick={() => {
          handleCourseAdding(addedCourses)
        }}>Next</button>
    </div>
  )
}
