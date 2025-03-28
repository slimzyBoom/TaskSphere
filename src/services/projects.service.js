import axios from "axios";
const url = import.meta.env.VITE_APP_API_URL;

export const getAllProjectsService = async () => {
  try {
    const response = await axios.get(`${url}/projects`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const createProjectService = async (projects) => {
  try {
    const response = await axios.post(`${url}/projects`, projects);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getProjectService = async (id) => {
  try {
    const response = await axios.get(`${url}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
