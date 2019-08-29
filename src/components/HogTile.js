import React, { Component } from "react";
// https://www.npmjs.com/package/react-slugify
import slugify from "react-slugify";

class HogTile extends Component {
  constructor() {
    super();

    this.state = {
      displayInfo: false
    };
  }

  handleLearnClick = () => {
    // () for implicit return
    this.setState(
      previousState => ({
        displayInfo: !previousState.displayInfo
      }),
      console.log(this.state.displayInfo)
    );
  };

  handleHideClick = () => {};

  render() {
    let { name, weight, specialty, greased } = this.props.hog;
    // https://stackoverflow.com/questions/41947474/dynamically-loading-local-images-with-reactjs
    let slugName = slugify(name, { delimiter: "_" });
    const hogImage = require(`../hog-imgs/${slugName}.jpg`);
    return (
      <div className="ui four wide column">
        <div className="ui card pigTile">
          <div className="image">
            {/* https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react */}
            <img src={hogImage} />
          </div>
          <div className="content">
            <span className="header">{name}</span>
            <br></br>
            <button onClick={this.handleLearnClick}>Learn More</button>
            {this.state.displayInfo ? (
              <div className="toggleDiv">
                <span className="weight">
                  Weight: {Math.floor(weight * 309)} pounds{" "}
                </span>
                <div className="description specialty">
                  Specialty: {specialty}
                </div>
              </div>
            ) : (
              ""
            )}
            <button onClick={this.handleHideClick}>Hide Hog</button>
          </div>
          <div className="extra content"></div>
        </div>
      </div>
    );
  }
}

export default HogTile;
