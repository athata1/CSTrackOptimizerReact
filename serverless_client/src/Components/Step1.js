import React, {useState} from 'react'

export default function Step1({addTracksCallback}) {

  const [tracks, setTracks] = useState([]);
  const [trackNames] = useState(["Databases","Computational Science", "Computer Graphics", "Algorithms", "Programming Languages", "Software", "Systems", "Security", "Machine Intelligence"])

  function toggleTrack(trackIndex) {
      const newTracks = [...tracks];
      if (newTracks.indexOf(trackIndex) === -1)
        newTracks.push(trackIndex);
      else 
        newTracks.splice(newTracks.indexOf(trackIndex), 1);
      setTracks(newTracks);
  }

  function handleClick(e) {
    if (tracks.length === 0) return;
    addTracksCallback(tracks);
  }

  return (
    <div className="content">
        <div className="track-list">
          {trackNames.map((elem, idx) => {
            return <div 
                key={trackNames[idx]} 
                className= {tracks.indexOf(idx) === -1 ? "track" : "track track-selected"} 
                onClick={() => {toggleTrack(idx)}}>
                {trackNames[idx]}
              </div>
          })}
        </div>
        <button 
          id = "step-1" 
          className={tracks.length === 0 ? "submit not-selected" : "submit"}
          onClick={handleClick}>
          Next
        </button>
    </div>
  )
}
