import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://shampy.cyclic.cloud/api/", // Use a relative path without the domain and port
  withCredentials: true,
});

export default newRequest;