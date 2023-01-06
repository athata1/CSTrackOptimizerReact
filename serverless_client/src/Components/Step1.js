import React, {useEffect, useRef, useState} from 'react'

export default function Step1({addTracksCallback, setHeightCallback}) {

  //All tracks currently being selected
  const [tracks, setTracks] = useState([]);

  //All buttons to be added to the page
  const [trackNames] = useState(["Databases","Computational Science", "Computer Graphics", "Algorithms", "Programming Languages", "Software", "Systems", "Security", "Machine Intelligence"])

  const parentRef = useRef();

  useEffect(() => {
    if (!parentRef.current) return;
    const resizeObserber = new ResizeObserver(() => {
      setHeightCallback(parentRef.current.offsetHeight);
    });
    resizeObserber.observe(parentRef.current);
    return () => resizeObserber.disconnect();
  }, [setHeightCallback])

  function toggleTrack(trackIndex) {
      const newTracks = [...tracks];
      if (newTracks.indexOf(trackIndex) === -1)
        newTracks.push(trackIndex);
      else 
        newTracks.splice(newTracks.indexOf(trackIndex), 1);
      setTracks(newTracks);
  }

  //Ensure that button is ignored when disabled
  function handleClick(e) {
    if (tracks.length === 0) return;
    addTracksCallback(tracks);
  }

  return (
    <div ref={parentRef} className="content">
        <div className="track-list">
          {trackNames.map((elem, idx) => {
            return <div 
                tabIndex={0}
                key={trackNames[idx]} 
                className= {tracks.indexOf(idx) === -1 ? "track" : "track track-selected"} 
                onClick={() => {toggleTrack(idx)}}>
                {trackNames[idx]}
              </div>
          })}
        </div>
        <button 
          tabIndex={0}
          id = "step-1" 
          className={tracks.length === 0 ? "submit not-selected" : "submit"}
          onClick={handleClick}>
          Next
        </button>
    </div>
  )
}
