import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Message from "./components/Message";
import Navigation from "./components/navigation";
import BlogPage from "./pages/BlogPage";
import Project from "./pages/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/BlogPage" exact element={<BlogPage />} />
          <Route path="/Project" exact element={<Project />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />

        <Message welcome="Welcome!" />
        <Message greeting="Dear Visitor" />
      </div>
    </BrowserRouter>
  );
}

export default App;
