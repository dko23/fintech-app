import React from 'react'
import { motion } from "framer-motion"
import login from '../images/login.gif'
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { LockIcon, EmailIcon } from '@chakra-ui/icons';
import Register from './Register';



function LoginPage() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('')
    const [show, setShow] = useState(false)



    const onUserChanged = e => setUserName(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const handleClick = () => setShow(!show)

    const handleFormSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post('http://localhost:9000/signin', {
                username,
                password,
            });
            
    window.location.href = '/Budget'; // Redirect the user to the desired page
        } catch (error) {
            // Handle any error that occurred during the request
            if (error.response.data.error) {
                setStatusMessage(error.response.data.error);
            } else {
                setStatusMessage('An error occurred during login.');
            }
        }
    };
    
    return (
        <>
          <div className='d-flex justify-content-center align-items-center vh-100'>
             <div className='container login-form '>
            <div className='row'>
                <div className='col-md-6'>
                    <img className="card-img-top sales" src={login} alt="login" />
                </div>
            <div className='col-md-6'>
                        <h1 style={{ fontWeight: 'bold' }}>Sign IN</h1>
                        <p>New to StuSave? <Register/>.</p>
                    
                    <form onSubmit={handleFormSubmit}>
                            <InputGroup style={{ marginBottom: 20 }}>
    <InputLeftElement fontSize='1.4em'>
    <EmailIcon color='gray.300'   fontSize='1.2em'/>
    </InputLeftElement>
    <Input placeholder='Email' type="string"
                                value={username}
                                onChange={onUserChanged}
                                name="username" size='lg' />
  </InputGroup>

                        <InputGroup>
                            <Input placeholder='password'
                                value={password}
                                onChange={onPasswordChanged}
                                name="password" size='lg'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            <InputLeftElement fontSize='1.4em'>
                            < LockIcon color='gray.300' />
                            </InputLeftElement>
                        </InputGroup>
                        <Button colorScheme='teal' size='md' type='submit'>
                            Enter
                        </Button>
                        
                    </form>
                            <div style={{color:'red'}}> 
                            {statusMessage}
                 </div>
                    {/* <p className="text-center">&copy; 2023 StuSave(GH) Ltd. All Rights Reserved.</p> */}
                </div>
            </div>
        </div>
       </div> 
        </> )
}
export default LoginPage












































