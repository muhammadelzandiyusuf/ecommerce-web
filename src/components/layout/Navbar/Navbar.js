import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/sass/navbar.sass';

const Navbar = () => {
    return (
        <div className="fixed-nav navbar">
            <span><i className="far fa-heart"></i></span>
            <Link to="/search">
                <button className="btn-search">
                    <i className="fas fa-search"></i>
                </button>
            </Link>
        </div>
    );
}

export default Navbar;