import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../part/Button";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <i className="fas fa-suitcase fa-lg"> Trip</i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="service">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <Button
            go="sign-in"
            buttonStyle="navbar-btn btn-outline-success"
            buttonSize="btn-sm"
            buttonShape="btn-block"
            type="button"
          >
            SIGN IN
          </Button>
          <Button
            go="sign-up"
            buttonStyle="navbar-btn btn-success"
            buttonSize="btn-sm"
            buttonShape="btn-block"
            type="button"
          >
            SIGN UP
          </Button>
        </div>
      </nav>
    );
  }
}
