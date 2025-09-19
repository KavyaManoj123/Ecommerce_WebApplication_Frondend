// src/utils/endpoints.js
export const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    profile: "/auth/profile",
  },
  products: {
    list: "/products",
    detail: (id) => `/products/${id}`,
  },
  orders: {
    list: "/orders",
    detail: (id) => `/orders/${id}`,
  },
};
