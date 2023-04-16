import axios from "axios";

// Create an instance of axios with a default content type
export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json"
  }
});

// // Create a request interceptor to dynamically set the content type
// instance.interceptors.request.use(config => {
//   // Set the content type to the value of the `contentType` parameter
//   if (config.contentType) {
//     config.headers['Content-Type'] = config.contentType;
//   }
//   return config;
// });

// export default instance;

// // Use the axios instance to make requests
// instance.get('/users')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // Make a request with a different content type
// instance.post('/users', { name: 'John' }, {
//   contentType: 'application/x-www-form-urlencoded'
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
