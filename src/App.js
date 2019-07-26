import React, { Component } from 'react';
import Main from './components/common';
import { Deck, DeckCard } from './components/Deck';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    cards: cards,
    guesses: [],
    score: 0,
    topScore: 0
  };

  componentDidMount = () => this.displayScore();

  // Update score when card is clicked and different from previous guesses,
  // reset score and clear guesses if card was previously clicked
  handleUpdateScore = cardId => {
    const guessCorrect = !this.state.guesses.includes(cardId);
    const newScore = guessCorrect ? this.state.score + 1 : 0;
    const state = {
      guesses: guessCorrect ? [...this.state.guesses, cardId] : [], // Use spread operator to add card to guesses while preserving previous guesses
      score: newScore
    };

    // Only update top score when a new top score is achieved
    if (newScore > this.state.topScore) {
      state.topScore = newScore;
    }

    this.setState(state, () => this.displayScore());
  };

  // Log score and top score to console
  displayScore = () => {
    console.log(`Score: ${this.state.score}`);
    console.log(`Top Score: ${this.state.topScore}`);
  };

  // Randomizes the order of cards using the Durstenfeld shuffle from
  // https://stackoverflow.com/a/12646864/10919629
  shuffleDeck = () => {
    const deck = this.state.cards;

    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  };

  render() {
    return (
      <>
        <Main>
          <Deck>
            {
              this.shuffleDeck().map(card =>
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
