import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nopage from "./Components/Nopage";
import Services from "./Components/Services";
import Header from "./Components/Header";
import SourceCode from "./Components/SourceCode";
import Footer from "./Components/Footer";

const App = ()=>{
  return (
    <>
    <BrowserRouter>
       <Header />
        <Routes>
        <Route path="/about" element={<About />}/>

          <Route path="/services" element={ <Services />}/>
           
          <Route path="/contact" element={<Contact />}/>
            
          <Route path="/" element={<Home />}/>

          <Route path="*" element={<Nopage />}/>

          <Route path="/code" element={<SourceCode />}/>
            
          </Routes>
          <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;