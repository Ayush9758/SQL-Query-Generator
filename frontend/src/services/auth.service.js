import axiosInstance from './axios';

export const exampleRequest = async () => {
  const response = await axiosInstance.get('/example');
  return response.data;
};
