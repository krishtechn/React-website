import React, { useState } from 'react'
import Carosels from './Carosels'
import "../App.css";
import Footer from './Footer';

const Contact = () => {
  const images = [
    {
      title:"First slide label",
      subtitle:"Some representative placeholder content for the first slide.",
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS441iF6zICfi_fI8tO4657AJbUduhD_Zhy8g&usqp=CAU",
    },
    {
      title:"Second slide label",
      subtitle:"Some representative placeholder content for the first slide.",
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS441iF6zICfi_fI8tO4657AJbUduhD_Zhy8g&usqp=CAU",
    },
    {
      title:"Third slide label",
      subtitle:"Some representative placeholder content for the first slide.",
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCk9MTsj5pE-i-GeCcNBfs-ae6xP4-xkyidA&usqp=CAU",
    }
  ]
  const [checks,setchecks] = useState(true);
  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");
  return (

    <div>
      <Carosels items={images} />

      <div className="centerform">
      <form onSubmit={(e)=>{
        e.preventDefault();
        if(email == ""){
          alert("email blank");
        }else if(password == ""){
          alert("password blank");
        }else{
          alert(`your email is ${email} and password ${password}`)
          setemail("");
          setpassword("");
          setchecks(false);
        }
      }}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address {email}</label>
    <input type="email" value={email} onChange={(e)=>{
      setemail(e.target.value)
    }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password {password}</label>
    <input type="password" value={password} onChange={(e)=>{
       setpassword(e.target.value)
     }} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" checked={!checks} onChange={()=>{
          checks?setchecks(false):setchecks(true);
    }} class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" disabled={checks}>Submit</button>
</form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact