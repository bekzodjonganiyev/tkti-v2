import { http} from "./http";

class ClientApiService {
  getAll(url) {
    return http.get(url);
  }

  getById(url) {
    return http.get(url);
  }

  add(url, data) {
    return http.post(url, data);
  }

  update(url, data) {
    return http.put(url, data);
  }

  delete(url) {
    return http.delete(url);
  }
}

export default new ClientApiService();