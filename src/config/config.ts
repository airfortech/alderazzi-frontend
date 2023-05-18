export const config = {
  apiUrl: process.env.REACT_APP_backend_url || "http://localhost:3001/api",
  lang: process.env.REACT_APP_language || "en",
  axiosTimeout: (process.env.REACT_APP_axios_timeout || 2000) as number,
};
