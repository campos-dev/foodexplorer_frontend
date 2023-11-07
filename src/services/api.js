import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-foodexplorer.netlify.app/api",
  withCredentials: true,
});
