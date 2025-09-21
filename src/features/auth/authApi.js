// src/features/auth/authApi.js
import { request } from "../../utils/apiClient";
import { endpoints } from "../../utils/endpoints";

export const loginApi = (credentials) =>
  request("POST", endpoints.auth.login, credentials);

export const registerApi = (data) =>
  request("POST", endpoints.auth.register, data); // data includes role now ✅

export const profileApi = () => request("GET", endpoints.auth.profile);
