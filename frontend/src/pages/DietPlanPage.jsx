import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function DietPlanPage() {
    return (
        <Container>
            <h1>Diet Plan</h1>
            <div>
                <h3>Breakfast</h3>
                <div className='d-flex flex-row justify-content-around'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <div>
                <h3>Lunch</h3>
                <div className='d-flex flex-row justify-content-around'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <div>
                <h3>Dinner</h3>
                <div className='d-flex flex-row justify-content-around'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Food Name</Card.Title>
                            <Card.Text>Food Description</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
}
