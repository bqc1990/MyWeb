import React, { Component } from "react";
import "./HeroSection.css";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="hero-text">
              <h1 className="title">ADVENTURE</h1>
              <p className="description">With Trip</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
