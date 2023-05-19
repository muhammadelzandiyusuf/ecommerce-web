import React from 'react';
import MenuItem from './MenuItem';

import '../../../assets/sass/footermenu.sass';

const FooterMenu = () => {

    const menus = [
        {title: 'Home', link: 'home', icon: 'fas fa-home'},
        {title: 'Feed', link: 'feed', icon: 'fas fa-clone'},
        {title: 'Cart', link: 'cart', icon: 'fas fa-shopping-cart'},
        {title: 'Profile', link: 'profile', icon: 'fas fa-user'},
    ]

    return (
        <div className="fixed-nav footer-menu">
            <MenuItem menus={menus} />
        </div>
    );
}

export default FooterMenu;