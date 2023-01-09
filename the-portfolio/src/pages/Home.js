import React, { Component } from "react";
import Button from "../components/button";
import Autumn from "../images/Autumn.jpg";
const Home = () => {
  return (
    <div className="container">
      <h2> Simplify Life</h2>
      <img
        className="home-img"
        src={Autumn}
        alt="Father and son lying in the grass"
        width={900}
      />
      <br />
      <br />

      <p className="home-p">
        After a long time finding my life&#180;s purpose and passion, I found
        coding. When I choose this path, life become simpler and happier.
        Suddenly, everything fits together. This is one of the best decisions I
        ever made.
      </p>
      <Button> Click Me 👋 </Button>
    </div>
  );
};
export default Home;
