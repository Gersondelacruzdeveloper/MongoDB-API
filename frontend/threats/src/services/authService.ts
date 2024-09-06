// src/services/authService.ts

import axios from 'axios';

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/', {
            username,
            password,
        });

        const token = response.data.access; // JWT Token
        const refreshToken = response.data.refresh; // Refresh token if needed

        // Store the token in localStorage or sessionStorage for persistence
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        // Set token in Axios headers for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return response.data;

    } catch (error) {
        console.error('Error during login', error);
        throw error; // Optionally, you can handle error in the component
    }
};

// Optional: Create a logout function
export const logout = () => {
    // Remove tokens from storage and headers
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    delete axios.defaults.headers.common['Authorization'];
};
