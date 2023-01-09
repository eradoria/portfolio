import React from "react";
// import { Link as Link2 } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../CSS/About.css";
import background from "../images/background.jpg";

// const ButtonMailto = ({ mailto, label }) => {
//   return (
//     <Link2
//       to="#"
//       onClick={(e) => {
//         window.location.href = mailto;
//         e.preventDefault();
//       }}
//     >
//       {label}
//     </Link2>
//   );
// };

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text-container">
        <div className="text">
          <h1>About Me</h1>
          <p>
            I am a Web Developer with experience in HTML, CSS, Javascript. Along
            with with frame works as Node.js. Also Libarys like React. I have
            also worked with SQL and AWS cloud.{" "}
          </p>

          <div className="social-media">
            <a
              href="https://github.com/eradoria"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="55" color="grey" className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/erick-doria-hernandez"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="55" color="grey" className="linkedin" />
            </a>
            <a
              onClick={() => (window.location = "mailto:yourmail@domain.com")}
              href=" "
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size="55" color="grey" className="email" />
            </a>
          </div>
        </div>

        <div className="image-container">
          <div
            className="img"
            style={{
              background: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "100%",
            }}
          >
            <div className="img-box" />
          </div>
        </div>
      </div>
    </div>
  );
}
