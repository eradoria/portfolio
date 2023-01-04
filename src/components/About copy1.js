import React from "react";
import "../CSS/About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const ButtonMailto = ({ mailto, label }) => {
//   return (
//     <Link
//       to="#"
//       onClick={(e) => {
//         window.location.href = mailto;
//         e.preventDefault();
//       }}
//     >
//       {label}
//     </Link>
//   );
// };

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <p>
          A little about me, I am a Web Developer with experience in HTML, CSS,
          Javascript. Along with with frame works as Node.js. Also Libarys like
          React. I have also worked with SQL and AWS cloud.{" "}
        </p>
        {/* <div class="social-media">
          <a
            href="https://github.com/eradoria"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="55" color="darkgrey" className="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/erick-doria-hernandez"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="55" color="darkgrey" className="linkedin" />
          </a>

          <ButtonMailto
            label={<FaEnvelope className="email" size="55" />}
            mailto="mailto:eradoria@gmail.com"
          />
        </div> */}
      </div>
      {/* <div className="AppSpinner">
        <div className="App-header">
          <div className="imgContainer">
            <FaReact size="55" color="darkgrey" className="reactLogo" />
            <FaAws size="55" color="darkgrey" className="awsLogo" />
            <FaHtml5 size="55" color="darkgrey" className="htmlLogo" />
            <FaJs size="55" color="darkgrey" className="jsLogo" />
            <FaNodeJs size="55" color="darkgrey" className="nodejsLogo" />
            <FaCss3 size="55" color="darkgrey" className="cssLogo" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
