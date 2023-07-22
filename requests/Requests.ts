import axios from "axios";


const apiUrl = "http://192.168.10.102:8080/api";
const authUrl = process.env.BACKEND_AUTH_URL;


if(!apiUrl) throw new Error("Undefined Url parameter");
if(!authUrl) throw new Error("Undefined Url parameter");

console.log({url: apiUrl, url2: authUrl})

export enum Url { API, AUTH };

const baseUrl = (requestFor: Url): string | Error => {
    if(requestFor === Url.API) return apiUrl;
    if(requestFor === Url.AUTH) return authUrl;
    throw new Error("Bad Url parameters");
}

const Requests = {

  get: (url: Url, endpoint: string) => axios.get(baseUrl(url) + endpoint).catch(err =>{
    if(err) return err;
    if(err.request) return err.request;
    if(err.response) return err.response;
  }),
    getWithCredentials: (url: Url, endpoint: string) => axios.get(baseUrl(url) + endpoint, { withCredentials: true }).catch(err => {
      if(err) return err;
      if(err.request) return err.request;
      if(err.response) return err.response;
    }),
    postWithImage: (url: Url, endpoint: string, body: {}) => axios.post(baseUrl(url) + endpoint, body, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}),
    post: (url: Url, endpoint: string, body: {}) => axios.post(baseUrl(url) + endpoint, body, {withCredentials: true}).catch(err => {
      if(err) return err;
      if(err.request) return err.request;
      if(err.response) return err.response;
    }),
    patch: (url: Url, endpoint: string, body: {}) => axios.patch(baseUrl(url) + endpoint, body, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}),
    delete: (url:string) => axios.delete(url),
    auth: () => axios.get(authUrl, { withCredentials: true }),
    test: (url: string, body: {}) => axios.post(url,body)

}
export default Requests;