import React, { useEffect, useState } from "react";
import "../styling/PublicationsBody.css";
import publicationData from "../jsonFiles/PublicationsData.json"; // Import the JSON data
import PublicationsImage from "../assets/PublicationsImage.png"

function PublicationsBody() {
  const [inViewItems, setInViewItems] = useState([]);

  useEffect(() => {
     function isElementInViewport(el) {
       const rect = el.getBoundingClientRect();
       return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <=
           (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <=
           (window.innerWidth || document.documentElement.clientWidth)
       );
     }

     // Callback function to handle element visibility
     function callbackFunc() {
       const items = document.querySelectorAll(".timeline li");

       const updatedInViewItems = Array.from(items).map((item) => {
         const isInView = isElementInViewport(item);
         if (isInView && !item.classList.contains("in-view")) {
           item.classList.add("in-view");
           return item;
         } else if (!isInView && item.classList.contains("in-view")) {
           item.classList.remove("in-view");
         }
         return null;
       });

       setInViewItems(updatedInViewItems.filter((item) => item !== null));
     }

     // Event listeners for window load and scroll
     window.addEventListener("load", callbackFunc);
     window.addEventListener("scroll", callbackFunc);

     // Cleanup event listeners on component unmount
     return () => {
       window.removeEventListener("load", callbackFunc);
       window.removeEventListener("scroll", callbackFunc);
     };
  }, []);

  return (
    <div className="publicationsContainer">
      <div className="publicationsImage">
        <img src={PublicationsImage} alt=""></img>
      </div>
      <div className="PublicationsContent">
        <section className="timeline">
          <ul>
            {publicationData.map((item, index) => (
              <li key={index}>
                <div>
                  <time>{item.year}</time>
                  <div className="discovery">
                    <p>{item.discovery}</p>
                  </div>
                  <div className="scientist">
                    <p>{item.scientist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default PublicationsBody;
