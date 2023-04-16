import { instance } from "./http";

const config = {
  a: (method) => (
    { 
      method: method,
      headers: {
        "Content-type": "application/json",
        "Token": localStorage.getItem("token")
      }
    }
  ),

  b: (method, body, formData) => (
    { 
      method: method,
      headers: {
        "Content-type": formData ? "application/json" : "multipart/form-data",
        "Token": localStorage.getItem("token")
      },
      body: body
    }
  )
}

class ClientApiService {
  getAll(url){
    return instance.get(url)
  }
}

export default new ClientApiService();