import React from "react";
import background from "../images/background.jpg";
import "../Home.css";
import resume from "../Docs/Erck Hernandez Resume2.pdf";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "100%",
      }}
    >
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
  );
}
