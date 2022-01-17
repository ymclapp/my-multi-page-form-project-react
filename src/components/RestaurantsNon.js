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

    //const data = restaurants.map(restaurant => ({ name:  'restaurant.name', description: 'restaurant.description'}));

    return (


        // <Container className='showRestaurants mt-4'>
        //     <h1>This is where the restaurant name should be... </h1>
        //        <p>{restaurants.name}</p>
        // </Container >
        <div className='Restaurants' >
            {/* <h3>This will show the raw data of a particular restaurant - curly brace JSON.stringify(restaurants.data) curly brace and use API = http://localhost:1337/api/restaurants/1</h3>
          <p>{JSON.stringify(restaurants.data)}</p> */}

            <h3>This will show the raw data for all restaurants - curly brace JSON.stringify(restaurants.data) curly brace and use API = http://localhost:1337/api/restaurants</h3>
            <p>{JSON.stringify(restaurants.data)}</p>


            {/* <h3>This will show the raw data for all demographics - curly brace JSON.stringify(demographics.data) curly brace and use API = http://localhost:1337/api/demographics</h3>
          <p>{JSON.stringify(demographics.data)}</p> */}
        </div>
    );
}