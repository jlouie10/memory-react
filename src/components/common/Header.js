import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className="navbar navbar-expand navbar-light fixed-top">
            {props.children}
        </header>
    );
}

export default Header;
