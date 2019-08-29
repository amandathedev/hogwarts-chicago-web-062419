import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pigArray: hogs
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={this.state.pigArray} />
      </div>
    );
  }
}

export default App;

// Goals:
// √    Create an index displaying all hog tiles
// √    Parent containers must have class of 'ui grid container'
// √    Children should have a class of 'ui eight wide column'
// √    Render each hog name and picture in a tile
// √    Show the hog's details upon click
// Filter the hogs that are greased
// Sort the hogs based on name
// Should still be able to sort after filtering
// Sort the hogs based on weight
// BONUS: allow users to hide hogs
// BONUS: bring in pig gifs from API
// BONUS: implement Semantic Cards for each hog

// Requirements:
// functional and container components
// √    components using state and props
// re-render based on client-side events
