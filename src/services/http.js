import axios from "axios";

export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://tkti-back-lexde.ondigitalocean.app/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};

export const http = axios.create({
  baseURL: "https://backend.tkti.uz/",
  headers: {
    Token: localStorage.getItem("token"),
  },
});
