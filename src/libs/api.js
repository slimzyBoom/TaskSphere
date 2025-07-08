import axios from 'axios'
const url = import.meta.env.VITE_APP_API_URL;
import isTokenValid from '@/utils/checkToken';



const api = axios.create({
  baseURL: url, 
  headers: {
    'Content-Type': 'application/vnd.api+json'
  },
  timeout: 10000
})


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token') 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})



const axios_api = axios.create({
  baseURL: url,
  timeout: 15000, // 15 seconds timeout
});

axios_api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token && isTokenValid(token)) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // Token is missing or expired
    localStorage.removeItem('token');
    window.location.href = '/'; // Or use router.push('/login')
    throw new axios.Cancel('Token expired or missing');
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export { api, axios_api };
