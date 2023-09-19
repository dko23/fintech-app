import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { LockIcon, EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Swal from 'sweetalert2'



function Register() {
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm({
        username: "",
        password: ""
    });

 
    const onSubmit = async () => {
        try {
            // Make the API call using the form data
            const response = await axios.post('http://localhost:9000/register', watch()); //* DONT FORGET TO CHANGE THIS!!!!!!
            // Process the response if needed
            reset()
            Swal.fire(
                'Registration successful!'
              )
        } catch (error) {
            // Handle any error that occurred during the request
        }
    };  //We are using the watch function to access the current value of the 'username' form field

    const handleClick = () => setShow(!show)
    return (
        <div>
            <Button onClick={onOpen}>Sign Up Here Today</Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay  className='glass-background'/>
                <ModalContent>
                    <ModalHeader className='text-center'><h2>Sign Up!!</h2> One more step and you are ready to go!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <>
                            
                            <form onSubmit={handleSubmit(onSubmit)} className='box'>
                                <div>
                                    <InputGroup style={{ marginBottom: 20 }}>
                                        <InputLeftElement fontSize='1.4em'>
                                            <EmailIcon color='gray.300' fontSize='1.2em' />
                                        </InputLeftElement>
                                        <Input placeholder='username' type="string"
                                            className="form-control"
                                            {...register('username', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                                            name="username" size='lg' />
                                    </InputGroup>
                                    {errors.username && errors.username.type === 'required' && (
                                        <p className='error-message' style={{color:'red'}}>Username is required</p>
                                    )}
                                    {/* Adjust the error message based on the pattern validation */}
                                    {errors.username && errors.username.type === 'pattern' && (
                                        <p className='error-message' style={{color:'red'}}>Username is not valid</p>
                                    )}
                                </div>



                                <div>
                                    <InputGroup>
                                        <Input placeholder='password'
                                            className="form-control"
                                            {...register('password', { required: true, minLength: 5 })}
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
                                    {errors.password && errors.password.type === "required" && (
                                        <p className='error-message' style={{color:'red'}}>Password is required</p>
                                    )}
                                    {errors.password && errors.password.type === "minLength" && (
                                        <p className='error-message' style={{color:'red'}}>Password should be at least 6 characters</p>
                                    )}
                                </div>
                              
                                <Button colorScheme='teal' size='md' type='submit'>
                                    Let's Go!
                                </Button>
                            </form>
                        </>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Register


