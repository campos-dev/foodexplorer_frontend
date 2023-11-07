import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-foodapp.netlify.app/api",
  withCredentials: true,
});
