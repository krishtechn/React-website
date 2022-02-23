import React, { useState } from 'react'
import "../App.css";
import {Link} from "react-router-dom";

const Header = () => {
const [show,setshow] = useState("none");
  return (
    <nav className='navbar'>
        <div className='navmenu'>
        <h1 className='logo'>Tech<span>nica</span>l krish</h1>
        <div className='RightLink' style={{display:show}}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <button style={{border:"2px solid gray",padding:"0.1rem 1rem",borderRadius:30}} onClick={
          ()=>{
                show=="none"?setshow("block"):setshow("none");
          }
        }>show</button>
        </div>

    </nav>
  )
}

export default Header