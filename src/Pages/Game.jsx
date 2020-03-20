import React, { Component } from 'react';

import GameHome from '../Components/GameHome'
import GameBoard from '../Components/GameBoard'
import GameOver from '../Components/GameOver'

import Header from '../Components/Header'

class Game extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      gameState: 'none',
      lastScore: 0
    }

    this.boundNewGameClick = this.newGameClick.bind(this);

  }

  newGameClick = () => {
    this.setState({ gameState: 'loading' })
    setTimeout(this.gameBoardLoaded, 500);
  }

  gameBoardLoaded = () => {
    this.setState({ gameState: 'playing' })
  }

  endGame = (score) => {
    this.setState({ gameState: 'finished', lastScore: score });
  }

  render() {

    var content;

    if (this.state.gameState == 'none') {
      content = <GameHome newGameClick={this.newGameClick}>  </GameHome>
    }
    else if (this.state.gameState == 'loading') {
      content = <div>Loading...</div>
    }
    else if (this.state.gameState == 'playing') {
      content = <GameBoard loaded={this.gameBoardLoaded} endGame={this.endGame}></GameBoard>
    }
    else if (this.state.gameState = 'finished') {
      content = <GameOver score={this.state.lastScore} playAgain={this.newGameClick}></GameOver>
    }

    return (
      <div>
        <Header></Header>
        {content}
      </div>
    );
  }
}
export default Game;