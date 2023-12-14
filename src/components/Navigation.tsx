import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { TfiViewList } from "react-icons/tfi";

export const Navigation = () => {
  const logo = require("../images/Oscar-Logo.png");
  //navlink having different color when active
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "#DC143C" : "#232D3F",
      marginRight: "10px",
    };
  };
  //mobile nav menu to work with expanding with react router dom
  const [expanded, setExpanded] = useState<any>(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="px-5 py-2"
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
            <Link
              to="#about"
              className="nav-link"
              // style={navLinkStyle}
              //react router dom integration with navbar toggle. Setting false makes it unexpand
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Home
            </Link>
            <NavLink
              to="#about"
              className="nav-link"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className=""
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
