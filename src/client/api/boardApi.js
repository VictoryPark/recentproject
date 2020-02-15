import axiosInstance from './index';

export const getPosts = () => axiosInstance.get('/posts');

export const getPost = id => axiosInstance.get(`/posts/${id}`);

export const addPost = post => axiosInstance.post(`/posts`, post);
