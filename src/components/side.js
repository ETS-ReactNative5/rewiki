import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class side extends Component {
    render() {
        return (
                <div className="content">
                <li><Link to="/reob">Resident Evil Outbreak Files</Link></li>
                <li><Link to="/rerc">Resident Evil Operation Raccoon City</Link></li>
                <li><Link to="/rere">Resident Evil Revelations</Link></li>
                <li><Link to="/rere2">Resident Evil Revelations 2</Link></li>
                <li><Link to="/recu">Resident Evil Umbrella Chronicles</Link></li>
                <li><Link to="/redc">Resident Evil Darkside Chronicles</Link></li>
                <li><Link to="/reuc">Resident Evil Umbrella Corps</Link></li>

                <a href="#" class="previous">&laquo; Back</a>
            </div>
            
        );
    }
}

export default side;