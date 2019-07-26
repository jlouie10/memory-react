import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
    return (
        <div className="container">
            <div className="row scoreboard-container">
                <div className="col-md-4" id="logo">
                    <a className="navbar-brand" href="/">Memory</a>
                </div>
                <div className="col-md-4 col-sm-6 col-6 text-center" id="message">
                    <p>{props.message}</p>
                </div>
                <div className="col-md-4 col-sm-6 col-6 text-right" id="score">
                    <p><span>Score: {props.score}</span> | <span>Top Score {props.topScore}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard;
