// src/services/authService.ts

import axios from 'axios';

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/', {
            username,
            password,
        });

        const token = response.data.access;
        const refreshToken = response.data.refresh;
        console.log('token', token)

        // Check if token is correctly retrieved and stored
        if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            // Set the token in the Axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return response.data;
        } else {
            throw new Error('Token not provided');
        }

    } catch (error) {
        console.error('Error during login', error);
        throw error;
    }
};


export const register = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/register/', {
            username,
            email,
            password,
        });
        return response.data; // Return registration response
    } catch (error) {
        console.error('Error during registration', error);
        throw error;
    }
};
