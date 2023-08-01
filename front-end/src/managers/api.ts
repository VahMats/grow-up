import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000/'

const instance = axios.create();

export default instance