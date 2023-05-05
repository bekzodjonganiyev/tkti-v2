import axios from "axios";

export const fetchApi = async (url, data) => {
    const res = await fetch(`http://localhost:5000/${url}`, data)
    return await res.json()
}  

export const http = axios.create({
  baseURL: "https://triumf.pythonanywhere.com/api/v1/dashboard/",
  headers: {
    Token: localStorage.getItem("token"),
  },
});
