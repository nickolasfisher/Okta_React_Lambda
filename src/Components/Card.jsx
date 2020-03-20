import React from 'react';

const Card = ({ card }) => {

    var content;

    if (card.visible) {
        content = <h4>{card.rank} {card.suit}</h4>;
    }
    else {
        content = <h4>Not visible</h4>
    }

    return (
        <div className="col-lg-2">
            {content}
        </div>
    );
};

export default Card;