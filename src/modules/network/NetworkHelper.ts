import Axios, {AxiosInstance} from "axios";

const NetworkHelper: AxiosInstance = Axios.create({
  // baseURL: "https://derbyaalnagib.herokuapp.com/"
  // baseURL: "http://192.168.1.15:3001/api"
  baseURL: "https://derbyaalnagib.com/api"
});

export { NetworkHelper };
