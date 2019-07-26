import React from 'react';
import './DeckCard.css';

function DeckCard(props) {
    return (
        <div className="col-md-3 col-sm-4 col-6 card-container">
            <div className="card">
                {props.cardId}
            </div>
        </div>
    );
}

export default DeckCard;
