// LoginReducer.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi, profileApi } from "./authApi";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials); // ✅ use wrapper
      return response;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await registerApi(data); // ✅ use wrapper
      return response;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Register failed");
    }
  }
);
