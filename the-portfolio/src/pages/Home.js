// import React, { Component } from "react";
import Button from "../components/button";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import Autumn from "../images/Autumn.jpg";
const Home = () => {
  return (
    <Container>
      <h2> Simplify Life</h2>
      <img
        className="home-img"
        src={Autumn}
        alt="Father and son lying in the grass"
        width={700}
      />
      <br />
      <br />
      <p>
        I am just an ordinary person living an ordinary life. But I dare myself
        to be technical and I succeeded.
      </p>
      <p className="home-p">
        After a long time finding my life&#180;s purpose and passion, I found
        coding. When I choose this path, life become simpler and happier.
        Suddenly, everything fits together. This is one of the best decisions I
        ever made.
      </p>
      <Button> Click Me 👋 </Button>
    </Container>
  );
};
export default Home;
