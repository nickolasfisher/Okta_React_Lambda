import React, { Component } from 'react';

import Card from './Card'

import { Row, Col, Button } from 'react-bootstrap'


class GameBoard extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            cards: [],
            activeCard: {},
            lastResult: '',
            gameOver: false,
            needsNewDeck: false,
            score: 0
        }
    }

    componentDidMount() {
        this.getNewDeck();
    }

    getNewDeck = () => {
        var cards = [
            {
                suit: 'hearts',
                value: 5,
                rank: '5',
                visible: true,
                order: 0
            },
            {
                suit: 'hearts',
                value: 6,
                rank: '6',
                visible: false,
                order: 1
            },
            {
                suit: 'spades',
                value: 7,
                rank: '7',
                visible: false,
                order: 2
            },
            {
                suit: 'diams',
                value: 8,
                rank: '8',
                visible: false,
                order: 3
            },
            {
                suit: 'clubs',
                value: 9,
                rank: '9',
                visible: false,
                order: 4
            },
            {
                suit: 'hearts',
                value: 11,
                rank: 'J',
                visible: false,
                order: 5
            }
        ];

        this.setState(
            {
                cards: cards,
                activeCard: cards[0],
                needsNewDeck: false
            }
        )
    }

    guess = (higherOrLower) => {

        var correct;
        var push;
        var activeCard = this.state.activeCard;

        var nextCardIdx = activeCard.order + 1;
        var nextCard = this.state.cards[nextCardIdx];

        if (nextCard.value > activeCard.value && higherOrLower == 'higher') {
            correct = true;
        }
        else if (nextCard.value < activeCard.value && higherOrLower == 'lower') {
            correct = true;
        }
        else if (nextCard.value == activeCard.value) {
            push = true;
        }

        if (correct) {
            this.setState({
                score: this.state.score + 1,
                lastResult: 'Correct! ',
                needsNewDeck: nextCardIdx == 5
            });
        }
        else if (push) {
            this.setState({
                lastResult: 'A push!  Keep playing.  ',
                needsNewDeck: nextCardIdx == 5
            });
        }
        else {
            this.setState({
                lastResult: 'Aww, that was incorrect',
                gameOver: true
            });
        }


        nextCard.visible = true;
        this.setState({
            activeCard: nextCard
        })
    }

    render() {

        var leaveButton;
        if (this.state.gameOver || this.state.needsNewDeck) {
            leaveButton = <Button style={{ width: '100%'}} variant={"danger"} onClick={() => this.props.endGame(this.state.score)}>End Game</Button>
        }

        var newDeckButton;
        if (this.state.needsNewDeck) {
            newDeckButton = <Button style={{ width: '100%'}} variant={"primary"} onClick={() => this.getNewDeck()}>New Deck</Button>
        }

        var disableButtons = this.state.gameOver || this.state.needsNewDeck;

        return (

            <div>

                <h4>Lets Play Card Sharks</h4>

                <Row>
                    {this.state.cards.map((card, i) => {
                        return (<Col sm={2}>
                            <Card card={card} key={i} />
                        </Col>
                        )
                    })}
                </Row>

                <Row className="mt-3">
                    <Col sm={2}>
                        <strong>Current Card</strong>
                        <Card card={this.state.activeCard} />
                    </Col>

                    <Col sm={4}>

                        <strong>Higher or Lower?</strong>
                        <br></br>

                        <Button style={{ width: '50%'}} variant="primary" disabled={disableButtons} onClick={() => this.guess('higher')}>Higher</Button> <br></br>
                        <Button style={{ width: '50%'}} variant="warning" disabled={disableButtons} onClick={() => this.guess('lower')}>Lower</Button>

                    </Col>
                    <Col sm={2}>
                        Current Score: {this.state.score}
                    </Col>
                    <Col sm={2}>
                        Last Card: {this.state.lastResult}
                        {leaveButton} <br></br>
                        {newDeckButton}
                    </Col>

                </Row>

            </div >
        );
    }

}


export default GameBoard;