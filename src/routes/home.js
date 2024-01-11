import React from "react";
import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import Topics from "../component/Topics";
import ImageSwiper from "../component/ImageSwiper";
import Connect from "../component/Connect";
import Footer from "../component/Footer"
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
      <Footer />
    
    
    </div>
  );
};

export default home;
