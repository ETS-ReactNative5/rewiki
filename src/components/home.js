import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class home extends Component {
    render() {
        return (
            <div className="content"><div className="content3">
            <h1>Escape the woods</h1>
            <h2>Choose next destination</h2>

               
                <Link to="/main"><img src={"./re0.png"} /></Link>
                <Link to="/side"><img src={"./re0.png"} /></Link>
                <Link to="/trivia"><img src={"./re0.png"} /></Link>

               

            </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="./train.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default home;