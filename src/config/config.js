import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost/wp-json/",
  headers: {
    "Content-Type": "application/json"
  }
});

// Request interceptor for API calls
http.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      'Accept': 'application/json',
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

// Response interceptor for API calls
http.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    console.log(error.response)
    originalRequest._retry = true;
    const access_token = localStorage.getItem("access_token");
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return http(originalRequest);
  }
  else if (error.response.status === 410) {
    // alert('post not exit')
  }
  return Promise.reject(error);
});

export default http;
