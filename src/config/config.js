import axios from "axios";

const http = axios.create({
  baseURL: "https://deliviet.ngoan.online/wp-json",
  headers: {
    "Content-Type": "application/json",
  }
});

// Request interceptor for API calls
http.interceptors.request.use(
  async config => {
    config.headers = {
      'Accept': 'application/json',
    };
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// Response interceptor for API calls
http.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = localStorage.getItem("access_token");
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return http(originalRequest);
  }
  return Promise.reject(error);
});

export default http;
