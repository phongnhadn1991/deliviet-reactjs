import axios from "axios";

const http = axios.create({
  baseURL: "http://deliviet.mcntestsv.ga/wp-json/",
});

export default http;
