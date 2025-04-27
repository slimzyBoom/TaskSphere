import api from "@/libs/api";

export const getAllProjects = async () => {
  try {
    const response = await api.get(`/projects`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const createProject = async (projects) => {
  try {
    const response = await api.post(`${url}/projects`, projects);
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
