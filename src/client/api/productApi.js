import axiosInstance from './index';

export const getTest = () => axiosInstance.get('/getusername');
