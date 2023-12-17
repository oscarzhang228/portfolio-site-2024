import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TfiViewList } from "react-icons/tfi";

export const Navigation = () => {
  const logo = require("../images/Oscar-Logo.png");
  //mobile nav menu to work with expanding with react router dom
  const [expanded, setExpanded] = useState<any>(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="px-5 py-1 nav"
        expanded={expanded}
      >
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="nav-logo" alt="Oscar Logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          //react router dom integration with navbar toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="nav-toggle"
        >
          <TfiViewList />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" role={"collapse"}>
          <Nav className="me-auto" />
          <Nav>
            <a
              href="/"
              className="nav-link"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Home
            </a>
            <a
              href="https://drive.google.com/file/d/1QOxLHyUkC7--ewj18zd7-1WAB24RgYRl/view?usp=sharing"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Experience
            </a>
            <a
              href="https://github.com/oscarzhang228"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Projects
            </a>
            <a
              href="mailto:oscarzhang228@gmail.com"
              className="nav-link"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
