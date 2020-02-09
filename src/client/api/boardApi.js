import axiosInstance from './index';

export const getPosts = () => axiosInstance.get('/posts');
