import React from 'react';


const GameHome = ({ newGameClick }) => {

    return (
        <div>
            <button onClick={newGameClick}> Start a new game</button>
        </div>
    );
}

export default GameHome;