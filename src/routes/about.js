import React from 'react'
import Navbar1 from "../component/Navbar1"
import AboutUsIntro from "../component/AboutUsIntro";
import Collaborations from '../component/Collaborations';

const about = () => {
  return (
    <div>
      <Navbar1 />
      <Collaborations /> 
      <AboutUsIntro/>  
    </div>
  );
}

export default about
