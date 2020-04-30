import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <ul className="Navbar" >

                <li><Link to="/">Home</Link></li>                  
                <li><Link to="/main">Main</Link></li>                        
                <li><Link to="/side" >Side</Link></li>
                <li><Link to="/Trivia">Trivia</Link></li>
                
                 
            </ul>
        );
    }
}

export default Navbar;