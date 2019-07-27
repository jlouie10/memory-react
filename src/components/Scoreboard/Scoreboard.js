import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <span className="mr-2">Score: {props.score}</span>|
            </li>
            <li className="nav-item">
                <span className="ml-2">Top Score: {props.topScore}</span>
            </li>
        </ul>
    );
}

export default Scoreboard;
