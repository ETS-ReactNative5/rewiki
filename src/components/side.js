import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class side extends Component {
    render() {
        return (
        
            <div className="content"><div className="content3">
            <h1>Time to escape the city</h1>
            <h2>Choose next destination</h2>
                <Link to="/reob"><img src={"./outbreak.png"} /></Link>
                <Link to="/rerc"><img src={"./raccoon.png"} /></Link>
                <Link to="/rere"><img src={"./rev.png"} /></Link>
                <Link to="/rere2"><img src={"./rev2.png"} /></Link>
                <Link to="/recu"><img src={"./uc.png"} /></Link>
                <Link to="/redc"><img src={"./dc.png"} /></Link>
                <Link to="/reuc"><img src={"./umcorp.png"} /></Link>

                <button><Link to="/">&laquo; Back</Link></button>
                </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="./train.mp4" type="video/mp4"/>
                </video>
               
                                
            </div>
            
            
        );
    }
}

export default side;