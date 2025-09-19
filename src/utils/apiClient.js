// src/utils/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // change only here
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = async (method, url, data = {}, params = {}) => {
  try {
    const response = await apiClient({ method, url, data, params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default apiClient;
