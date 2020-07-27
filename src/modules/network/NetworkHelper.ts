import Axios, {AxiosInstance} from "axios";

const NetworkHelper: AxiosInstance = Axios.create({
  baseURL: "https://derbyaalnagib.herokuapp.com/"
});

export { NetworkHelper };
