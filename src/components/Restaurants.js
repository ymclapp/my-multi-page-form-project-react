import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/restaurants';


export default function Restaurants() {

    const [restaurants, setRestaurants] = useState({});

    useEffect(() => {
        getRestaurantsWithFetch();
    }, []);

    const getRestaurantsWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setRestaurants(jsonData);
        console.log(jsonData);
    };

    return (

        <Container className='showRestaurants mt-4'>
            <h1>This is where the restaurant name should be... </h1>
               <p>{restaurants.name}</p>
        </Container >
    );
}