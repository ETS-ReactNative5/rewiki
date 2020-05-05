import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class main extends Component {
    render() {
        return (
            <div className="content"><div className="content3">
            <h1>Explore the mansion</h1>
            <h2>Choose a route</h2>
                
                <Link to="/re0"><img src={"./buttons/re0.gif"} alt="Resident evil 0"/></Link>
                <Link to="/re1"><img src={"./buttons/re1.gif"} alt="Resident evil 1"/></Link>
                <Link to="/re2"><img src={"./buttons/re2.gif"} alt="Resident evil 2"/></Link>
                <Link to="/re3"><img src={"./buttons/re3.gif"} alt="Resident evil 3"/></Link>
                <Link to="/recvx"><img src={"./buttons/recvx.gif"} alt="Resident evil veronica"/></Link>
                <Link to="/re4"><img src={"./buttons/re4.gif"} alt="Resident evil 4"/></Link>
                <Link to="/re5"><img src={"./buttons/re5.gif"} alt="Resident evil 5"/></Link>
                <Link to="/re6"><img src={"./buttons/re6.gif"} alt="Resident evil 6"/></Link>
                <Link to="/re7"><img src={"./buttons/re7.gif"} alt="Resident evil 7"/></Link>

                <button><Link to="/">&laquo; Back</Link></button>

            </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="./videos/hall.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default main;