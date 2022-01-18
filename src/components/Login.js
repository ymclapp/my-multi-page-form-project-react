import './Login.css';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


export default function Login() {
    
    
    function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, firstName, lastName, email, password } = form.elements;

        const loginData = {
            username:  username.value,
            firstName:  firstName.value,
            lastName:  lastName.value,
            email:  email.value,
            password:  password.value,
        };
        console.log(loginData);

        Login(loginData);
        form.reset();
    }

    // if (user) {
    //     return <Redirect to='/'/>
    // }

    return (
        <>
        <Form className='login-form' onSubmit={handleLoginSubmit}>
            <h4 className='form-title text-center'>Log In to Continue </h4>
            <Form.Group>
                
                <FloatingLabel controlId='floatingInput' label='Username:  ' className='loginUsername'>
                    <Form.Control type='text' name='username' />
                </FloatingLabel>

                <br />

                <FloatingLabel controlId='floatingInput' label='First Name:  ' className='loginFirstName'>
                    <Form.Control type='text' name='firstName' />
                </FloatingLabel>

                <br />

                <FloatingLabel controlId='floatingInput' label='Last Name:  ' className='loginLastName'>
                    <Form.Control type='text' name='lastName' />
                </FloatingLabel>

                <br />

                <FloatingLabel controlId='floatingInput' label='Email:  ' className='loginEmail'>
                    <Form.Control type='text' name='email' />
                </FloatingLabel>

                <br />

                <FloatingLabel controlId='floatingInput' label='Password:  ' className='loginPassword'>
                    <Form.Control type='password' name='password' />
                </FloatingLabel>

                <Button type='submit' className='login-button'>Log In</Button>

            </Form.Group>
        </Form>
        </>
    )
}