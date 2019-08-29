import React, { Component } from "react";
import HogTile from "./HogTile";

class HogContainer extends Component {
  render() {
    let hogTiles = this.props.hogs.map(hog => {
      return <HogTile hog={hog} />;
    });

    return <div className="ui grid container indexWrapper">{hogTiles}</div>;
  }
}

export default HogContainer;
