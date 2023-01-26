import React, { Component } from "react";
import Project1 from "../projects/Project1";
import Project2 from "../projects/Project2";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>My Portfolio</h1>
        <Project1
          title="Project 1"
          description="A brief description of project 1"
          screenshot="project1-screenshot.png"
          demoLink="https://project1.com"
        />
        <Project2
          title="Project 2"
          description="A brief description of project 2"
          screenshot="project2-screenshot.png"
          demoLink="https://project2.com"
        />
      </div>
    );
  }
}

export default Portfolio;
