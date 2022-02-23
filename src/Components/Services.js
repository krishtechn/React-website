import React from 'react'
import "../App.css";
import Itemdata from "../Components/Serivicesdata";
import {Link} from "react-router-dom";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true

  };
  return (
    <div className='servicescontainer'>
        <h1 className='textservices'>Services</h1>
          <div className="container">
          <div class="row">
        <Slider {...settings}>
        
            {Itemdata.map((items)=>{
                return <div class="col">
                <Card title={items.title} desc={items.desc} img={items.img} code={items.code} link={items.link} category={items.category}/>
            </div>
            })}
        </Slider>
        </div>
           </div>   
       
    </div>
  )
}

const Card = ({title,desc,img,code,link,category})=>{
    return (
        <>
      <div class="card" style={{width: "18rem"}}>
      <img src={img} alt="" style={{width:"100%",height:"40vh"}} />
  <div class="card-body">
  <h5 class="card-title">{title}</h5>
        <p class="card-text text-truncate">{desc}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <Link to={link} style={{outline:"none",border:"2px solid black",padding:"0.3rem 2rem",borderRadius:"30px"}}>source code</Link>
  </div>
</div>
        </>
    );
}

export default Services