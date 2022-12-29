import React from 'react'
import logo from './../images/logo.png'


export default function Navbar() {
  return (
    <nav>
        <div id = "nav">
            <img className="logo" alt="Purdue University" src={logo}/>
            <div className = "title" >CS Track Optimizer</div>
        </div>
    </nav>
  )
}
