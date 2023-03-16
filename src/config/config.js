import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost/wp-json/",
  headers: {
    "Content-Type": "application/json"
  }
});

// Hàm lấy token từ localStorage
export const getAccessTokenFromLS = async () => {
  try {
    const token = await localStorage.getItem("access_token");
    return token;
  } catch (error) {
    console.log(error);
    return "";
  }
};

const updateToken = (token) => {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

getAccessTokenFromLS().then((token) => {
  if (token) {
    updateToken(token);
  }
});

export default http;
