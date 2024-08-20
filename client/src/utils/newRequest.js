import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampyapi-production.up.railway.app/api/", // Use a relative path without the domain and port
  withCredentials: false,
});

export default newRequest;
