import React from 'react';


const GameOver = ({ score, playAgain }) => {

    return (
        <div>
            Game over!  Your score was {score}.

            <button>Submit High Score</button>

            <button onClick={playAgain}>Play Again</button>
        </div>
    );
}

export default GameOver;