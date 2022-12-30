import React, {useEffect, useState} from 'react'
import { Database } from '../ClassData/Database';
export default function Step2({handleCourseAdding, electives}) {

  const [addedCourses, setAddedCourses] = useState([]);
  const [modifiedElectives, setModifiedElectives] = useState([]);

  useEffect(() => {
    const newModifiedElectives = [...modifiedElectives];
    for (const courseNum of electives) {
      newModifiedElectives.push(courseNum);
    }
    setModifiedElectives(newModifiedElectives);
  }, [])

  function addCourse(courseNum) {
      const newAddedCourse = [...addedCourses];
      newAddedCourse.push(courseNum);

      const newModifiedElectives = [...modifiedElectives];
      newModifiedElectives.splice(newModifiedElectives.indexOf(courseNum), 1)
      setAddedCourses(newAddedCourse)
      setModifiedElectives(newModifiedElectives)
  }

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
            return <div className="course" onClick={() => {addCourse(courseNum)}}>
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
            <div className="removed-container">
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
