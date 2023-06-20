import React, { useState } from "react";
import { FaHome, FaConnectdevelop, FaDev } from "react-icons/fa";
import { Link } from "react-scroll";
import "../CSS/Navbar.css";

function Navigation() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    active === "nav-menu" ? setActive("nav-active") : setActive("nav-menu");

    // TogglerIcon /
    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <nav className="nav">
      <h3 className="nav-brand"> </h3>
      <ul className={active}>
        <li className="nav-item">
          <div className="home">
            <FaHome size="25" color="darkgrey" />
            <Link
              activeClass="home-container"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </div>
          <div className="about">
            <FaConnectdevelop size="25" color="darkgrey" />
            <Link
              activeClass="about-container"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </div>
          <div className="projects">
            <FaDev size="25" color="darkgrey" />
            <Link
              activeClass="projects-container"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navigation;
