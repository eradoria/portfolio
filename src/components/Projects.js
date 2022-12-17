import React from "react";
import background from "../images/background.jpg";
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
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h2>My Promo</h2>
          <p>
            This app uses React, Node.js and SQL. While utilizing API fetching
            to allow users to promote thier business. Guest have the option to
            create an account and access a business more in depth.
          </p>
          <a
            href="https://mypromo.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Version
          </a>
          <a
            href="https://github.com/eradoria/MyPromo.git"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
        <img
          src="https://www.knowband.com/image/cache/data/Plugin%20Logo/Marketplace-Mobile-app-opencart-logo%20500%20x%20500-300x300.jpg"
          alt="promotion"
          className="my-promo-img"
        />
      </div>

      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h2>Weather App</h2>
          <p>
            This app uses React and utilizes API fetching in order to display
            Live weather condiftions.
          </p>
          <a
            href="https://forcastweatherapp.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Version
          </a>
          <a
            href="https://github.com/eradoria/React_weather_app.git"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
        <img
          src="https://miro.medium.com/max/720/0*wXx-oQd0JWn0Fb9g.webp"
          alt="weather app"
        />
      </div>
    </div>
  );
}
