// src/api.ts
import axios from 'axios';
import { CyberThreat } from './types';

const API_URL = 'http://localhost:8000/api/threats/';

// Fetch all cyberthreats
export const getCyberThreats = async (): Promise<CyberThreat[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new cyberthreat
export const addCyberThreat = async (newThreat: CyberThreat): Promise<CyberThreat> => {
    const response = await axios.post(API_URL, newThreat);
    return response.data;
};
