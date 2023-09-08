import axios from "axios";

// Create an Axios instance to communicate with your Node.js server
const apiClient = axios.create({
  baseURL: "https://apod-server.onrender.com", // your Node.js server URL
});

export default apiClient;
