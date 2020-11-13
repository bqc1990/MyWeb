import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  render() {
    return (
      <div className="card-deck text-center">
        <Card
          src="/images/img-9.jpg"
          title="Brazil"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
        />
        <Card
          src="/images/img-1.jpg"
          title="China"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
        />
        <Card
          src="/images/img-3.jpg"
          title="USA"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
        />
        <Card
          src="/images/img-2.jpg"
          title="UK"
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
        />
      </div>
    );
  }
}
