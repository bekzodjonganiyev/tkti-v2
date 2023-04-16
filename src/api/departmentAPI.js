import { fetchApi } from "../services/fetchApi";

export const departmentApi = {
    getDepartments: async (url) => {
        const config = {
            method: "GET",
            headers: {"Content-type": "application/json"}
        }
        return await fetchApi(url, config)
    },

}