import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  shoot = (e) => {
    console.log("shoot", e.clientX, e.clientY);
    var audio = new Audio("./magnum.mp3");
    audio.play();
    // let myTop = e.clientY;
    // let myRight = e.clientX;
    // document.getElementById(
    //   "root"
    // ).innerHTML += `<div class='pin' style='position:absolute; top:${myTop}px; right:${myRight}px;/>`;
  };

  render() {
    return (
      <div className="content">
        <div className="content3">
          <h1>Find safety away from the woods</h1>
          <h2>Choose next destination</h2>

          <Link to="/main">
            <img src={"./buttons/main.gif"} alt="Main story" />
          </Link>
          <Link to="/side">
            <img src={"./buttons/side.gif"} alt="Side story" />
          </Link>
          <Link to="/trivia">
            <img src={"./buttons/trivia.gif"} alt="Trivia" />
          </Link>
        </div>

        <img
          src={"./images/jump.gif"}
          onClick={this.shoot}
          className="zombie"
          alt="Zombie"
        />
        <video autoPlay muted loop id="myVideo">
          <source src="./videos/Forest.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default home;
