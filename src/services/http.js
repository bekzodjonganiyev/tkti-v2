import axios from "axios";

// Create an instance of axios with a default content type
export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    "Token": localStorage.getItem("token")
  }
});