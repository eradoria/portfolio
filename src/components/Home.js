import React from "react";
import "../CSS/Home.css";
import resume from "../Docs/Erck Hernandez Resume2.pdf";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="box" />
      <div className="title-container">
        <div class="title">
          <h1>Erick Hernandez</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="button">
          <a href={resume} target="Resume" download={resume}>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
