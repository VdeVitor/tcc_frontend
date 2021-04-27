import axios from 'axios';

const URL = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default URL;