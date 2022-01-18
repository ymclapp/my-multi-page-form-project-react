import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/demographics';


export default function Demographics() {

    const [demographics, setDemographics] = useState({});

    useEffect(() => {
        getDemographicsWithFetch();
    }, []);

    const getDemographicsWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setDemographics(jsonData);
        console.log(jsonData);
    };

    

    return (
        <Container className='showDemographics mt-4'>
            <h3>This will show the raw data for all restaurants - curly brace JSON.stringify(restaurants.data) curly brace and use API = http://localhost:1337/api/restaurants</h3>
            <p>{JSON.stringify(demographics.data)}</p>
        </Container >

    );
}