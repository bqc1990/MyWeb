import React, { Component } from "react";
import Cards from "../Cards";

import HeroSection from "../HeroSection";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <div className="container">
          <div className="m-4">
            <h1 className="text-center">
              Check out these awesome destinations
            </h1>
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}
