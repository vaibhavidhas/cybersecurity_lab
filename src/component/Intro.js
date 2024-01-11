import React from 'react'
import HeroImage from "../assets/HeroImage.jpeg"
import "../styling/Intro.css"

const Intro = () => {
 return (
   <div className="IntroContainer" id="scrollHome">
     <header className="mainHeading">
       <div className="mainHeading__content">
         <article className="mainHeading__text">
           <p className="mainHeading__preTitle" id="first">Team 915</p>
           <h4 className="mainHeading__title" id="second">CYBERSECURITY Laboratory </h4>

           <p className="mainHeading__preTitle" id="third">@ VJTI CoE CNDS</p>
         </article>
         <figure class="mainHeading__image">
           <img src={HeroImage} alt="" />
         </figure>
       </div>
     </header>
   </div>
 );
}

export default Intro
