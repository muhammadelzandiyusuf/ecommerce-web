import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
    return props.menus.map((item, key) => {
        return(
            <Link to={item.link} key={key}>
                <div className="menu-item">
                    <i className={item.icon}></i>
                    <div className="name">
                        {item.title}
                    </div>
                </div>
            </Link>
        );
    });
};

export default MenuItem;