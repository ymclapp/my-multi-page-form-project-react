import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/demographics';

export default function Restaurants(data) {
    fetch(`${API}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))

    return (

        <Container className='showRestaurants mt-4'>
                <ul>
                    {data.demographics.map(demo => (
                        <Card className='mt-4' style={{ width: '40rem' }} key={demo.id}>
                            <Card.Body>
                                <li>{demo.city}</li>
                            </Card.Body>
                        </Card>
                    ))}
                </ul>
        </Container >
    )
}