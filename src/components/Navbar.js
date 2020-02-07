import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <Link className="Navbar__brand" to="/Home">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          <span className=" font-weight-light">Platzi</span>
          <span className=" font-weight-bold">conf</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;
