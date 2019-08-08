import axios from 'axios';

const getToken = () => localStorage.getItem('AUTH_TOKEN');


export default axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2500,
  headers: { Authrization: getToken() },
});
