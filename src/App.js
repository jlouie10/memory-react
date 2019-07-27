import React, { Component } from 'react';
import { Header, Main } from './components/common';
import Scoreboard from './components/Scoreboard';
import Instructions from './components/Instructions';
import { Deck, DeckCard } from './components/Deck';
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    cards: cards,
    guesses: [],
    message: "Click on an image to earn points, but don't click on any more than once!",
    score: 0,
    topScore: 0
  };

  // Update score when card is clicked and different from previous guesses,
  // reset score and clear guesses if card was previously clicked
  handleUpdateScore = cardId => {
    const guessCorrect = !this.state.guesses.includes(cardId);
    const newScore = guessCorrect ? this.state.score + 1 : 0;
    const state = {
      guesses: guessCorrect ? [...this.state.guesses, cardId] : [], // Use spread operator to add card to guesses while preserving previous guesses
      message: this.broadcastMessage(guessCorrect),
      score: newScore
    };

    // Only update top score when a new top score is achieved
    if (newScore > this.state.topScore) {
      state.topScore = newScore;
    }

    this.setState(state);
  };

  // Returns a message based on the user's guess
  broadcastMessage = guessCorrect => {
    switch (guessCorrect) {
      case true:
        return 'You guessed correctly!';
      case false:
        return 'You guessed incorrectly!';
      default:
        return 'Click an image to begin!'
    }
  };

  // Randomizes the order of cards using the Durstenfeld shuffle from
  // https://stackoverflow.com/a/12646864/10919629
  shuffleDeck = () => {
    const deck = this.state.cards.slice(0, 12);

    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  };

  render() {
    return (
      <>
        <Header>
          <Scoreboard
            score={this.state.score}
            topScore={this.state.topScore}
          />
        </Header>
        <Main>
          <Instructions message={this.state.message} />
          <Deck message={this.state.message}>
            {
              this.shuffleDeck().map(card =>
                <DeckCard
                  key={card.cardId}
                  cardId={card.cardId}
                  image={card.image}
                  name={card.name}
                  updateScore={this.handleUpdateScore}
                />
              )
            }
          </Deck>
        </Main>
      </>
    );
  }
}

export default App;
