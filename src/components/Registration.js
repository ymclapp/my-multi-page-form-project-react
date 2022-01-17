import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const registrationApi = 'http://localhost:1337/api/restaurants';

export default function Registration(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    //const onSave = props.onSave;

    async function handleRegistrationAdd(event) {
        event.preventDefault()
        console.log('Submitting....');

        await fetch(`${registrationApi}`, {
            method: 'post',
            headers:  {
                'Content-Type':  'application/json',
                //'Accept': 'application/json'
            },

            body:  JSON.stringify(
                {data:
                { name, description }}),
        })
        .then(response => response.text())
        .then(data => console.log(data));

        //console.log('Submitted successfully');
        //onSave();
    }

    return (
        <Form onSubmit={handleRegistrationAdd} title='Restaurant Form'>

            <Form.Group className='mb-3' controlId='form.name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Name of Restaurant' value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='form.description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder='Enter your city' value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>

        </Form>
    )
};

