import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Button.css";
export default class Button extends Component {
  render() {
    return (
      <Link to={this.props.go}>
        <button
          className={`btn ${this.props.buttonStyle} ${this.props.buttonSize} ${this.props.buttonShape}`}
          type={this.props.type}
        >
          {this.props.children}
        </button>
      </Link>
    );
  }
}
