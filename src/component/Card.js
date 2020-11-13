import React, { Component } from "react";
import "./Cards.css";
export default class Card extends Component {
  render() {
    return (
      <div class="card mx-auto" style={{ maxWidth: "18rem" }}>
        <img
          class="card-img-top"
          style={{ height: "15rem" }}
          src={this.props.src}
          alt="travel"
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
