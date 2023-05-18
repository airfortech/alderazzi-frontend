export const config = {
  apiUrl: process.env.REACT_APP_backend_url || "http://localhost:3001/api",
  lang: process.env.REACT_APP_language || "en",
  axiosTimeout: Number(process.env.REACT_APP_axios_timeout) || 2000,
};
