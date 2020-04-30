import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class main extends Component {
    render() {
        return (
            <div className="content"><div className="content3">
            <h1>Explore the mansion</h1>
            <h2>Choose a route</h2>
                
                <Link to="/re0"><img src={"./re0.png"} /></Link>
                <Link to="/re1"><img src={"./re1.png"} /></Link>
                <Link to="/re2"><img src={"./re2.png"} /></Link>
                <Link to="/re3"><img src={"./re3.png"} /></Link>
                <Link to="/recvx"><img src={"./recvx.png"} /></Link>
                <Link to="/re4"><img src={"./re4.png"} /></Link>
                <Link to="/re5"><img src={"./re5.png"} /></Link>
                <Link to="/re6"><img src={"./re6.png"} /></Link>
                <Link to="/re7"><img src={"./re7.png"} /></Link>

                <button><Link to="/">&laquo; Back</Link></button>

            </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="./hall.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default main;