import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost/wp-json/',
});

export default http;