import axios from "axios";

// const JWT_TOKENT = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
// const config = {
//   headers: {
//     'Authorization': `Bearer ${JWT_TOKENT}`
//   }
// }

const http = axios.create({
  baseURL: "http://localhost/wp-json/",
});

const http_token = axios.create({
  baseURL: "http://localhost/wp-json/",

  headers: {
    Authentication: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJxdWFudHJpIiwiaWF0IjoxNjc4OTM2MjUxLCJleHAiOjE4MzY2MTYyNTF9.DD0H7RKQuLbDkPR02LHX3-SCsDW9CnSBfXK6swkgPXU`,
    "Content-Type": "application/json",
  },
});

export { http, http_token };
