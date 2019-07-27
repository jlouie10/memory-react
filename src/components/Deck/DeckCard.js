import React, { Component } from 'react';
import './DeckCard.css';

class DeckCard extends Component {
    // Handle update score without creating a new function on re-render
    handleClick = () => {
        this.props.updateScore(this.props.cardId);
    };

    render() {
        return (
            <div className="col-md-3 col-sm-4 col-6 card-container">
                <div onClick={this.handleClick}>
                    <img className="card" src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        );
    }
}

export default DeckCard;
