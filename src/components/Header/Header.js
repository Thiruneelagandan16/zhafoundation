import react from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";
// import { Button } from "bootstrap";
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { useState } from "react";
export default function Header() {
  const [Mobile,setMobile]=useState(false)
    return (
      <div>
        <div className="header">
            <div className="logo">
                <img src="../../img/hlogo.png"></img>
            </div>
            <ul className= {Mobile?"nav-links-mobile":"nav-link"}onClick={()=>setMobile(false)}>
              <li><a href=""><NavLink to="/">Home</NavLink></a></li>
              <li><a href=""><NavLink to="/about">About</NavLink></a></li>
              <li><a href=""><NavLink to="/Socialservices">Social Services</NavLink></a></li>
              <li><a href=""><NavLink to="/structure">Structure</NavLink></a></li>
              <li><a href=""><NavLink to="/Event">Event</NavLink></a></li>
              <li><a href=""><NavLink to="/Contact">Contact us</NavLink></a></li>
            </ul>
            <button className="mobile-menu-icon" onClick={()=>setMobile(!Mobile)}>

           {Mobile?<ImCross/>: <FaBars/>}
            </button> 
        </div>
      </div>
    );
  }