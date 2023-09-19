import React from 'react'
import axios from 'axios';
import { Button } from '@chakra-ui/react'

function LogOut() {

    const handleLogout = async () => {
        try {
            // Send a POST request to the server's /logout endpoint
            await axios.post('http://localhost:9000/logout');
            // Handle the successful logout on the frontend (e.g., redirect to login page)
            window.location.href = '/'; // Redirect the user to the login page immediately
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle logout error (e.g., display an error message to the user)
        }
    };
    return (
        <div>
            <>
                <button class="button-53" role="button"  onClick={handleLogout} >Sign Out </button>
            </>
        </div>
    ) 
}
export default LogOut