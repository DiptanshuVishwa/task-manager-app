import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-backend-whwm.onrender.com/api",
  withCredentials: true
});

export default API;