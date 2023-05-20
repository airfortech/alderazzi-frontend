import axios from "axios";

import { config } from "../config/config";

export const api = axios.create({
  baseURL: config.apiUrl,
  timeout: config.axiosTimeout,
  withCredentials: true,
  headers: {
    "Content-Language": config.lang,
  },
});
