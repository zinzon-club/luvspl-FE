import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

customAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

customAxios.interceptors.response.use(response => response, error => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("/login");
  }
  return Promise.reject(error);
});

export default customAxios;