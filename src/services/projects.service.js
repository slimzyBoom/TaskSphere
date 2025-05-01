import { api } from "@/libs/api";

export const getAllProjects = async () => {
  try {
    const response = await api.get(`/projects`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    const formData = new FormData();
    formData.append('admin_id', project.admin_id);
    formData.append('name', project.name);
    formData.append('description', project.description);
    formData.append('start_date', project.start_date);
    formData.append('end_date', project.end_date);
    // formData.append('status', project.status);

    if (project.image) {
      formData.append('image', project.image);
    }

    const response = await api.post(`/projects`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
     // Log the full error for debugging
     console.error("Full error:", error);

     // Log specific parts if available
     console.error("Backend message:", error.response?.data?.message || "No specific error message");
 
     // Now throw a clean error
     const errorMessage = error.response?.data?.message || "Something went wrong while creating the project.";
     throw new Error(errorMessage);

  }
};

export const getProjectService = async (id) => {
  try {
    const response = await axios.get(`${url}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw new Error (error.response);
  }
};
