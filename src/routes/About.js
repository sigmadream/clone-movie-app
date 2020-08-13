import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Talk is cheap. Show me the code.”
      </span>
      <span>−  Torvalds, Linus</span>
    </div>
  );
}

export default About;
