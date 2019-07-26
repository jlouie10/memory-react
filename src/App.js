import React, { Component } from 'react';
import Main from './components/common';
import { Deck, DeckCard } from './components/Deck';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    cards: cards,
    guesses: [],
    score: 0
  };

  componentDidMount = () => console.log(`Score: ${this.state.score}`);

  // Update score when card is clicked and different from previous guesses,
  // reset score and clear guesses if card was previously clicked
  handleUpdateScore = cardId => {
    const guessCorrect = !this.state.guesses.includes(cardId);

    this.setState({
      guesses: guessCorrect ? [...this.state.guesses, cardId] : [], // Use spread operator to add card to guesses while preserving previous guesses
      score: guessCorrect ? this.state.score + 1 : 0
    }, () => console.log(`Score: ${this.state.score}`));
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
