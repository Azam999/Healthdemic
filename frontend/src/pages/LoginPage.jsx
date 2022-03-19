import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

export default function LoginPage() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function handleLogin() {
        const res = await axios.post('/api/auth/login', {
            email: email,
            password: password,
        });
    }

    return (
        <Container>
            <h1 className="mt-5">Login</h1>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant='primary'
                    type='submit'
                    onClick={async () => await handleLogin()}
                >
                    Login
                </Button>
            </Form>
        </Container>
    );
}
