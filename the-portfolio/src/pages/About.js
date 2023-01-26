// import React, { Component } from "react";
import Bouquet from "../images/Bouquet.jpg";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <img
        className="about-img"
        src={Bouquet}
        alt="Flowers in a vase on top the library table"
        width={700}
      />
      <div className="about-p">
        <br />
        <br />
        <p>
          I have a passion for learning. I have a background in Literature and
          Linguistics but my career is geared towards childhood education. I
          have been a preschool teacher for many years, until I decided that it
          is time to change into something more challenging and exciting.
          Coding.
        </p>
        <p>
          I have this little tradition on my birthday, that I will do three
          things that I have never done before. So, with this little tradition I
          took up among other things: mushroom picking class, bee keeping class
          and even paddling class. I even have a huge garden in our home filled
          with my own plant collection. My hubby is very supported and provided
          me with the means to make my garden flourish and helping me to find
          time to do things I am passionate about. Recently, as a product of
          gardening hobby I picked up flower arrangement. I have been giving
          away flowers and bouquets to friends for birthdays, weddings and other
          special occassions. It is very rewarding and fulfilling hobby.
        </p>
        <p>
          The gear to learn more is what pushes me whenever coding is not so
          rewarding, for example bugs and errors. I always remind myself that it
          might be hard now but in a month this will be just another line up in
          my little victories.
        </p>
        <p>
          I have difficulty expressing logic in codes and symbols and I am
          terrible at Math, always have been. But coding actually makes me feel
          that when effort and motivation is mixed with curiosity, everything is
          possible. ☺️
        </p>
      </div>
    </Container>
  );
};
export default About;
