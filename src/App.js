import React, { Component } from 'react';
import Main from './components/common';
import { Deck, DeckCard } from './components/Deck';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = { cards };

  render() {
    return (
      <>
        <Main>
          <Deck>
            {
              this.state.cards.map(card =>
                <DeckCard key={card.cardId} cardId={card.cardId} />
              )
            }
          </Deck>
        </Main>
      </>
    );
  }
}

export default App;
