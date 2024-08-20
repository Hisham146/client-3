import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampyapi.onrender.com/api/", // Use a relative path without the domain and port
  withCredentials: true,
});

export default newRequest;
