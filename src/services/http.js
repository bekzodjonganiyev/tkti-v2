import axios from "axios";

// export const baseURL = "https://tkti-backend-g6pbz.ondigitalocean.app"
export const baseURL = "http://localhost:5001"
// export const baseURL = "https://backend.tkti.uz"
export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`${baseURL}/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};

export const http = axios.create({
  baseURL: "https://tkti-backend-g6pbz.ondigitalocean.app/",
  headers: {
    Token: localStorage.getItem("token"),
  },
});
