import Axios, {AxiosInstance} from "axios";

// baseURL: "https://derbyaalnagib.herokuapp.com/"
// baseURL: "http://192.168.1.15:3001/api"
// baseURL: "https://derbyaalnagib.com/api"
const baseURL:string = "http://localhost:3001/api"
// const baseURL:string = "/api"

const NetworkHelper: AxiosInstance = Axios.create({
  baseURL
});

export { NetworkHelper,baseURL };
