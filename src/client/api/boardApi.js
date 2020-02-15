import axiosInstance from './index';

export const getPosts = () => axiosInstance.get('/posts');

export const getPost = id => axiosInstance.get(`/posts/${id}`);
