import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Message from "./components/Message";
import Navigation from "./components/navigation";

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
