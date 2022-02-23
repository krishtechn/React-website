import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
        <span> @{date.getFullYear()}
        <a href="https://www.youtube.com/channel/UCF5oO43y67XYOfJRiPif1rw">  Technical krish</a>
        </span>
    </div>
  )
}

export default Footer