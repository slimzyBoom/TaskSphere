import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;
import { api, axios_api } from "@/libs/api";

export const registerUserService = async (credentials) => {
  try {
    const response = await axios.post(`${url}/register`, credentials);
    return response.data;
  } catch (error) {
    console.log(error.message);

    throw error;
  }
};

export const loginUserService = async (credentials) => {
  try {
    const response = await axios.post(`${url}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUserService = async () => {
  try {
    const response = await api.post(`/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const forgotPasswordService = async (email) => {
  const formData = new FormData()

  formData.append('email', email)

  try {
    const response = await api.post(`/forgot-password`, formData);
    return response.data;
  } catch (error) {
    console.error("Forget password request failed: ", error);
    throw error;
  }
};

export const resetPasswordService = async (password) => {
  try {
    const response = await axios.post(`${url}/reset-password`, {
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Reset password request failed: ", error.message);
    throw error;
  }
};

export const getUserService = async (id) => {
  try {
    const response = await api.get(`${url}/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const fetchAllUsersService = async (id) => {
  try {
    const response = await api.get(`/users`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const updateUserProfileService = async (id, data) => {
  try {
    const response = await axios.post(`${url}/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
