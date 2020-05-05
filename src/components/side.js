import React, { Component } from "react";
import { Link } from "react-router-dom";

class side extends Component {
  shoot = (e) => {
    console.log("shoot", e.clientX, e.clientY);
    var audio = new Audio("./magnum.mp3");
    audio.play();
  };

  render() {
    return (
      <div className="content">
        <div className="content3">
          <h1>Time to escape the city</h1>
          <h2>Choose next destination</h2>
          <Link to="/reob">
            <img src={"./buttons/outbreak.gif"} alt="Resident Evil outbreak" />
          </Link>
          <Link to="/rerc">
            <img src={"./buttons/raccoon.gif"} alt="Resident Evil operations" />
          </Link>
          <Link to="/rere">
            <img src={"./buttons/rev.gif"} alt="Resident Evil revelations" />
          </Link>
          <Link to="/rere2">
            <img src={"./buttons/rev2.gif"} alt="Resident Evil revelations 2" />
          </Link>
          <Link to="/recu">
            <img
              src={"./buttons/uc.gif"}
              alt="Resident Evil umbrella chronicles"
            />
          </Link>
          <Link to="/redc">
            <img src={"./buttons/dc.gif"} alt="Resident Evil darkside" />
          </Link>
          <Link to="/reuc">
            <img src={"./buttons/umcorp.gif"} alt="Resident Evil corps" />
          </Link>

          <button>
            <Link to="/">&laquo; Back</Link>
          </button>
        </div>
        <img
          src={"./images/2.gif"}
          onClick={this.shoot}
          className="zombie"
          alt="Zombie"
        />
        <video autoPlay muted loop id="myVideo">
          <source src="./videos/train.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default side;
