import axios from 'axios'
const url = import.meta.env.VITE_APP_API_URL;



const api = axios.create({
  baseURL: url, 
  headers: {
    'Content-Type': 'application/json'
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

export default api