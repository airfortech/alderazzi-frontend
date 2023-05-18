import axios from "axios";

import { config } from "../config/config";

export const api = axios.create({
  baseURL: config.apiUrl,
  timeout: config.axiosTimeout || 2000,
  withCredentials: true,
  headers: {
    "Content-Language": config.lang,
  },
});
