import axios from 'axios';

const getToken = () => (localStorage.getItem('AUTH_TOKEN'));

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2500,
  headers: { Authorization: `Bearer ${getToken()}` },
});


export const setAuthToken = (token) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const newConfig = config;
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      } else {
        delete newConfig.headers.Authorization;
      }
      return newConfig;
    },
    error => Promise.reject(error),
  );
};

export default axiosInstance;
