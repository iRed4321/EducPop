import axios from "axios";

// To contact the Database API
export default axios.create({
  baseURL: 'http://localhost:8080'
});