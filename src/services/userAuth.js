import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;

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

export const getUserService = async (id) => {
    try {
        const response = await axios.get(`${url}/users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}
