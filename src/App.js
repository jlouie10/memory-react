import React, { Component } from 'react';
import Main from './components/common';
import { Deck, DeckCard } from './components/Deck';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    cards: cards,
    score: 0
  };

  componentDidMount = () => console.log(`Score: ${this.state.score}`);

  // Update score when card is clicked
  handleUpdateScore = () => {
    this.setState({ score: this.state.score + 1 }, () => {
      console.log(`Score: ${this.state.score}`);
    });
  };

  render() {
    return (
      <>
        <Main>
          <Deck>
            {
              this.state.cards.map(card =>
                <DeckCard
                  key={card.cardId}
                  cardId={card.cardId}
                  updateScore={this.handleUpdateScore} />
              )
            }
          </Deck>
        </Main>
      </>
    );
  }
}

export default App;
