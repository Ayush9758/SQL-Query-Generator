import axiosInstance from './axios';

export const generateSQL = async (prompt) => {
  try {
    const response = await axiosInstance.post('/ai/generate', { prompt });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || error.message;
  }
};
