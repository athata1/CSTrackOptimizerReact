import React from 'react'
import { Database } from '../ClassData/Database'


export default function Step3({loading, finalCourseArray, courseAlgo}) {

  //Display loader if required
  if (loading) {
    return <>
      <div className="content">
        <div className = "loader">
            <div className = "spinner">
                <div className = "spinner-text">Loading...</div>
            </div>
        </div>
      </div>
      <a href = "https://athata1.github.io/CSTrackOptimizer/" id = "retry-button">Retry</a>
      </>
  }

  return (
    <>
    <div className="content">
      <div id="select">
      <div style={{fontSize: '1.75rem', textDecoration: 'underline'}}>Selected Tracks</div>
        {courseAlgo.current.trackList.map((track) => {
          return <div style= {{fontSize: '1.5rem'}}>{track.getName()}</div>
        })}
      </div>
      <div id = "result">
        {finalCourseArray.current.map((course) => {
          return <div className='result-data'>
            <div className='result-abbr'>{Database.getCourse(course)}</div>
            <div className='result-name'>{Database.getAbbr(course)}</div>
          </div>
        })}
      </div>
    </div>
    <a href = "https://athata1.github.io/CSTrackOptimizer/" id = "retry-button">Retry</a>
    </>
  )
}
