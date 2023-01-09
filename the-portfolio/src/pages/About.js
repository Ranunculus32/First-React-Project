import React, { Component } from "react";
import Bouquet from "../images/Bouquet.jpg";
const About = () => {
  return (
    <>
      <img
        className="about-img"
        src={Bouquet}
        alt="Flowers in a vase on top the library table"
        width={900}
      />
    </>
  );
};
export default About;
