import axios from 'axios';

// Get base URL from environment or use local backend for dev
const getBaseURL = () => {
  const envURL = import.meta.env.VITE_API_URL;
  if (envURL) {
    // Ensure Render's direct service URL (usually without /api) gets the /api suffix
    return envURL.endsWith('/api') ? envURL : `${envURL.replace(/\/$/, '')}/api`;
  }
  return 'http://localhost:5000/api';
};

const baseURL = getBaseURL();

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // We can add tokens here later
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors here (e.g. 401 Unauthorized -> redirect to login)
    if (error.response?.status === 401) {
      console.warn("Unauthorized API call");
    }
    return Promise.reject(error);
  }
);
