import React from 'react'
import Commonpage from './Commonpage'
import "../App.css";

const Home = () => {
  return (
    <div className='containers-home'>
        <Commonpage text="grow your business" desc="we are the team of talented developer making websites" btn="Get started" img="../images.jpg" blogpost="./code"/>
    </div>
  )
}

export default Home