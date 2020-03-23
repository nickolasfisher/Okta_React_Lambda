import React from 'react';

import { Row, Col, Table, Button } from 'react-bootstrap'

const GameHome = ({ newGameClick }) => {

    return (
        <div>
            <Row>
                <Col lg={12}>
                    <h4>Recent High Scores</h4>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nik</td>
                                <td>10</td>
                            </tr>

                            <tr>
                                <td>Colin</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button variant="primary" onClick={newGameClick}> Start a new game</Button>
                </Col>
            </Row>
        </div>
    );
}

export default GameHome;