import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import getName from '../utils/getName';

export default function HomePage() {
    const [name, setName] = useState('');
    useEffect(() => {
        getName().then(res => setName(res));
    }, []);

    return (
        <>
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href='/'>
                        <b>Healthdemic</b>
                    </Navbar.Brand>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h1 className='text-center mt-5 display-1'>
                    <b>Healthdemic</b>
                </h1>
                <div className='d-flex flex-row justify-content-around mt-5'>
                    <Card border='info' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <img
                                    className='me-3'
                                    width={50}
                                    src='https://img.icons8.com/ios/500/000000/bench-press-with-dumbbells.png'
                                />
                                <a
                                    href='/fitness-tracker'
                                    className='text-decoration-none'
                                >
                                    Fitness Tracker
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Track different types of fitness activities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border='info' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <img
                                    className='me-3'
                                    width={50}
                                    src='https://img.icons8.com/ios/500/000000/kawaii-broccoli.png'
                                />
                                <a
                                    href='/diet-plan'
                                    className='text-decoration-none'
                                >
                                    Diet Planner
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Have a diet plan generated for you with the
                                power of AI.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border='info' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <img
                                    className='me-3'
                                    width={50}
                                    src='https://img.icons8.com/ios/500/000000/brain--v1.png'
                                />
                                <a
                                    href='/mental-health-bot'
                                    className='text-decoration-none'
                                >
                                    Mental Health Bot
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Improve mental health with a chat bot.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2 className="text-center mt-5">{name ? `Hello ${name}!` : "Hello! Please sign in!"}</h2>
            </Container>
        </>
    );
}
