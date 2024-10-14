import axios, { AxiosResponse } from "axios";
import { getBasicHeader, getBearerHeader } from "../../utils/services";
import { BASE_URL } from "./../url";

function login(
  username: string,
  password: string,
): Promise<AxiosResponse<LoginResponse>> {
  const url = `${BASE_URL}/api/auth/signin`;
  const token = window.btoa(`${username}:${password}`);

  return axios.post(
    url,
    { username, password },
    { headers: getBasicHeader(token) },
  );
}

function logout() {
  const url = `${BASE_URL}/api/auth/logout`;
  const refreshToken = localStorage.getItem("refresh_token");

  if (refreshToken)
    return axios.patch(url, {}, { headers: getBearerHeader(refreshToken) });
  else console.error("No refresh token found");
}

export const AuthServices = {
  login,
  logout,
};
