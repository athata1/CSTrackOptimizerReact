import React from 'react'
import logo from './../images/logo.png'


export default function Navbar() {
  return (
    <nav>
        <div id = "nav">
            <img class="logo" alt="Purdue University" src={logo}/>
            <div class = "title" >CS Track Optimizer</div>
        </div>
    </nav>
  )
}
