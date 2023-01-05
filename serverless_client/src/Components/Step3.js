import React, { useEffect, useRef } from 'react'
import { Database } from '../ClassData/Database'


export default function Step3({loading, finalCourseArray, courseAlgo, setHeightCallback}) {

  const parentRef = useRef();

  useEffect(() => {
    if (!parentRef.current) return;
    console.log(parentRef.current)
    const resizeObserber = new ResizeObserver(() => {
      setHeightCallback(parentRef.current.offsetHeight);
    });
    resizeObserber.observe(parentRef.current);
    return () => resizeObserber.disconnect();
  }, [])
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
      <a href = "https://athata1.github.io/CSTrackOptimizerReact/" id = "retry-button">Retry</a>
      </>
  }

  return (
    <>
    <div ref={parentRef} className="content">
      <div id="select">
      <div style={{fontSize: '1.75rem', textDecoration: 'underline'}}>Selected Tracks</div>
        {courseAlgo.current.trackList.map((track) => {
          return <div style= {{fontSize: '1.5rem'}}>{track.getName()}</div>
        })}
      </div>
      <div id = "result">
        {finalCourseArray.current.map((course) => {
          return <div tabindex={0}  className='result-data'>
            <div className='result-abbr'>{Database.getCourse(course)}</div>
            <div className='result-name'>{Database.getAbbr(course)}</div>
          </div>
        })}
      </div>
      <a tabindex={0} href = "https://athata1.github.io/CSTrackOptimizerReact/" id = "retry-button">Retry</a>
    </div>

    </>
  )
}
