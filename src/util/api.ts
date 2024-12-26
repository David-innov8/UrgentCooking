import axios from "axios";
import Auth from "./auth";

const Api = axios.create({
  baseURL: "https://rent-comfy-api-apek.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    if (Auth.isAuthenticated()) {
      config.headers["Authorization"] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error: Error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;

    if (error.response.status === 403) {
      // Token is invalid or expired, redirect to login page
      Auth.logOut();
    }

    return Promise.reject(error);
  }
);

export default Api;
