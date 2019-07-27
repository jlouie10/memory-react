import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Memory</a>
                {props.children}
            </div>
        </header>
    );
}

export default Header;
