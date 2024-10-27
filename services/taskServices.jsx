import axios from 'axios';

const API_URL  = 'http://localhost:3001/api/v1/task';

export const createTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/createTask`, task,{
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Create Task failed';
    }
  };
  export const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`${API_URL}/${taskId}`,{
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      });

      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Delete Task failed';
    }
  };
