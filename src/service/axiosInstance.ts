// src/api/axiosInstance.ts
import  axios, { InternalAxiosRequestConfig  } from "axios";
import { isTokenExpired } from "../utils/auth";
import { BASE_URL } from "./url";
import { setAuthLocalStorageData } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  let token = localStorage.getItem("access_token"); // or wherever you store the token

  if (token && isTokenExpired(token)) {
    try {
      token = await refreshToken();
      localStorage.setItem("access_token", token);
    } catch (error) {
      setAuthLocalStorageData("remove");
      return Promise.reject(new Error("Token expired"));
    }
  }

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  const response = await axios.post(`${BASE_URL}/api/auth/revalidatetoken`, {
    refreshToken: localStorage.getItem("refresh_token"),
  });
  return response.data.data;
};

export default axiosInstance;
