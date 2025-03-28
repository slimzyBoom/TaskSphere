import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;
// import { useUserStore } from "@/stores/user";
// import { setActivePinia } from "pinia";
// setActivePinia(useUserStore);
// const userStore = useUserStore();

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
    console.log(error.message);

    throw error;
  }
};

export const logoutUserService = async () => {
  try {
    const response = await axios.post(`${url}/logout`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const forgotPasswordService = async (email) => {
  try {
    const response = await axios.post(`${url}/forgot-password`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error("Forget password request failed: ", error.message);
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
    const response = await axios.get(`${url}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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
