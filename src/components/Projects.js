import React from "react";
import background from "../images/background.jpg";
import Card from "./Card";
import "../Projects.css";

export default function Projects() {
  return (
    <div
      className="projects-container"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "100%",
      }}
    >
      <Card />
    </div>
  );
}
