import axios from 'axios';

const API_URL  = 'http://localhost:3001/api/v1/user';

export const registerUser = async (signUpData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, signUpData);
      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Signup failed';
    }
  };
  export const loginUser = async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, loginData);
      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Login failed';
    }
  };