import axios from "axios";


const url = process.env.BACKEND_URL;


const Requests = {

  get: (endpoint: string) => axios.get(url + endpoint).catch(err =>{
    if(err) return err;
    if(err.request) return err.request;
    if(err.response) return err.response;
  }),
    getWithCredentials: (endpoint: string) => axios.get(url + endpoint, { withCredentials: true }).catch(err => {
      if(err) return err;
      if(err.request) return err.request;
      if(err.response) return err.response;
    }),
    postWithImage: (endpoint: string, body: {}) => axios.post(url + endpoint, body, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}),
    post: (endpoint: string, body: {}) => axios.post(url + endpoint, body, {withCredentials: true}).catch(err => {
      if(err) return err;
      if(err.request) return err.request;
      if(err.response) return err.response;
    }),
    patch: (endpoint: string, body: {}) => axios.patch(url + endpoint, body, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}),
    delete: (url:string) => axios.delete(url),
    test: () => axios.get("http://192.168.10.106:8080/").catch(err => {
      if (err) return err;
      if (err.request) return err.request;
      if (err.response) return err.response;
    })
}
export default Requests;