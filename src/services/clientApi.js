import  {fetchApi} from "./http";

class ClientApiService {
  getAll(url){
    return fetchApi.get(url)
  }

  getById(url, id){
    return instance.get(`${url}/${id}`)
  }

  add(url, data){
    return instance.post(url, data)
  }

  update(url, id, data){
    return instance.put(`${url}/${id}`, data)
  }

  delete(id){
    return instance.delete(id)
  }
}

export default new ClientApiService();