import axiosInstance from './index';

export const goLogin = () => axiosInstance.get('/auths');
