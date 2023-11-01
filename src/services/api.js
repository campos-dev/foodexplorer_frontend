import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-foodexplorer.onrender.com",
  withCredentials: true,
});
