import axios from "axios";

const baseUrl = "https://api.themoviedb.org";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
