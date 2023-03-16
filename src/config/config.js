import axios from "axios";

const JWT_TOKENT = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : "";

// const config = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${JWT_TOKENT}`,
// };

const checkToken = (payload) => {
  if (payload) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload}`,
    };
  }
};

const http = axios.create({
  baseURL: "http://localhost/wp-json/",
  headers: checkToken(JWT_TOKENT),
});


export default http;
