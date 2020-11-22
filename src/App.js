import React, { Component } from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram"



export default class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Georgia, Vote!</h1>
        <Facebook />
        <Instagram />
      </div>
    );
  }
}
