import api from "./api";

// Register User
export const registerUser = async (userData) => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};

// Login User
export const loginUser = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token); // store JWT
  }
  return res.data;
};

// Get Current User
export const getProfile = async () => {
  const res = await api.get("/auth/profile");
  return res.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};
