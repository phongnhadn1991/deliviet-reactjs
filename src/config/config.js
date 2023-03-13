import axios from "axios";

const http = axios.create({
  baseURL: "https://deliviet.mcntestsv.ga/wp-json/",
});

export default http;
