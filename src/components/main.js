import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class main extends Component {
    render() {
        return (
            <div className="content">
                <li><Link to="/re0">Resident Evil Zero</Link></li>
                <li><Link to="/re1">Resident Evil</Link></li>
                <li><Link to="/re2">Resident Evil 2</Link></li>
                <li><Link to="/re3">Resident Evil 3</Link></li>
                <li><Link to="/recvx">Resident Evil Veronica</Link></li>
                <li><Link to="/re4">Resident Evil 4</Link></li>
                <li><Link to="/re5">Resident Evil 5</Link></li>
                <li><Link to="/re6">Resident Evil 6</Link></li>
                <li><Link to="/re7">Resident Evil 7</Link></li>

                <a href="#" class="previous">&laquo; Back</a>

            </div>
        );
    }
}

export default main;