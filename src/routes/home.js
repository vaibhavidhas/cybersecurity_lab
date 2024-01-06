import React from "react";
import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import Topics from "../component/Topics";
import ImageSwiper from "../component/ImageSwiper";
import Connect from "../component/Connect";
import Contact from "../component/ContactDirect"
import VulnerabilitiesTable from "../component/VulnerabilitiesTable";

const home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <VulnerabilitiesTable />
      <Topics />
      <ImageSwiper />
      <Connect />
      <Contact />
    
    
    </div>
  );
};

export default home;
