import React, { useEffect } from 'react'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import Auth from '../../../hoc/auth';
import Navbar from '../../LandingPage/Navbar';
import Home from '../../LandingPage/Home';
import About from '../../LandingPage/About';
import Skills from '../../LandingPage/Skills';
import Contact from '../../LandingPage/Contact';
import Work from '../../LandingPage/Work';
import "../../LandingPage/style.css";


function LandingPage() {

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => console.log(response))
  }, [])


  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}


export default Auth(LandingPage, null);