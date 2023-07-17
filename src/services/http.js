import axios from "axios";
export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://backend.tkti.uz/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};

// Create an instance of axios with a default content type
export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    "Token": localStorage.getItem("token")
  }
});