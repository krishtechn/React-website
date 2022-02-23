import React from 'react'
import SourceCodedata from "../Components/SourceCodeData";
import "../App.css";
import Servicesdata from "../Components/Serivicesdata";

const SourceCode = () => {
  return (
    <div className='ContainerSourcecode'>
        {SourceCodedata.map((data)=>{
            return <Code title={data.title} desc={data.desc} code={data.code}/>
        })}
    </div>
  )
}

const Code = ({title,desc,code})=>{
    return (
        <>
          <div className="contentsource">
          <h1 style={{fontSize:25,fontWeight:"bold",color:"black",textTransform:"capitalize",letterSpacing:3}}>{title}</h1>
        <p style={{fontSize:15,fontWeight:"normal",letterSpacing:1}}>{desc}</p>
          </div>
        <pre class="language-html" style={{backgroundColor:"black",padding:"10px 50px 10px 10px",width:"90%",margin:"30px auto",height:"100%",overflow:"auto"}}>
            <code style={{color:"white",textAlign:"left"}} id="cards">
              {code}
            </code>
        </pre>
        </>
    );
} 


export default SourceCode