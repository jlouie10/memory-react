import React from 'react';
import './Deck.css';

function Deck(props) {
    return (
        <section className={props.message === 'You guessed incorrectly!' ? 'animated shake' : ''}>
            <div className="container text-center">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Deck;
