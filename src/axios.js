import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-tata-9b4e4/us-central1/api", //api url(cloud function url)
});

export default instance;
