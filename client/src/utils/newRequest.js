import axios from "axios";

const newRequest = axios.create({
  baseURL: "shampyapi-production.up.railway.app/api/", // Use a relative path without the domain and port
  withCredentials: true,
});

export default newRequest;
