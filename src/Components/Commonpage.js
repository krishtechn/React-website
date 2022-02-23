import React from 'react'
import "../App.css";
import {Link} from "react-router-dom";
import Footer from './Footer';

const Commonpage = ({text,desc,btn,img,blogpost}) => {
  return (
    <>
    <div className='container'>
        <div className="centercontainer">
        <div className="leftcontent">
        <h1 className='Homecontent'>{text} <br/> with <span>Technical krish</span></h1>
        <p class="desc">{desc}</p>
        <Link className='btns' to={blogpost?blogpost:"/"}>{btn}</Link>
        </div>

        <div className="rightcontent">
            <img src={img} className='imgs' alt="" />
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Commonpage