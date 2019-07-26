import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                {props.message}
            </li>
            <li className="nav-item">
                Score: {props.score}
            </li>
            <li className="nav-item">
                Top Score {props.topScore}
            </li>
        </ul>
    );
}

export default Scoreboard;
