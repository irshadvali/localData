import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:3500/api",
  headers: {
    "Content-type": "application/json"
  }
});

export default http;
