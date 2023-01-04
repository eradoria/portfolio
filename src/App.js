import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="section-1" id="section1">
        <Home />
      </div>
      <div className="section-2" id="section2">
        <About />
      </div>
      <div className="section-3" id="section3">
        <Projects />
      </div>
    </div>
  );
}

export default App;
