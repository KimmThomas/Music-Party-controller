import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Testing React Code, is it working?</h1>;
  }
}

// Render the app in the #app div
const appDiv = document.getElementById("app");
render (<App />, appDiv); 