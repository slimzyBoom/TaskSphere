import api from "@/libs/api";


export const createTask = async (task) => {
    try {
      const formData = new FormData();
      formData.append('project_id', task.project_id);
      formData.append('description', task.description);
      formData.append('start_date', task.start_date);
      formData.append('end_date', task.end_date);
    
      const response = await api.post(`/tasks`, formData, {
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
       const errorMessage = error.response?.data?.message || "Something went wrong while creating the task.";
       throw new Error(errorMessage);
  
    }
  };

  export const updateTask = async (task) => {
    try {
      const formData = new FormData();
      formData.append('project_id', task.project_id);
      formData.append('description', task.description);
      formData.append('start_date', task.start_date);
      formData.append('end_date', task.end_date);
     
      formData.append('_method', 'PUT');

      const response = await api.post(`/tasks/${task.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      return response.data;
    } catch (error) {
       console.error("Full error:", error);
  
       console.error("Backend message:", error.response?.data?.message || "No specific error message");
   
       // Now throw a clean error
       const errorMessage = error.response?.data?.message || "Something went wrong while creating the task.";
       throw new Error(errorMessage);
  
    }
  };
  
export const markTaskCompleted = async (id) =>{
    try {
        const response = await api.put(`/${id}/mark-completed`)

        return response.data
        
    } catch (error) {
        console.error("Full error:", error);
       console.error("Backend message:", error.response?.data?.message || "No specific error message");

       const errorMessage = error.response?.data?.message || "Something went wrong while updating the status.";
       throw new Error(errorMessage);
    }
}

export const markTaskPending = async (id) =>{
    try {
        
        const response = await api.put(`/${id}/mark-pending`)

        return response.data
        
    } catch (error) {
        console.error("Full error:", error);
       console.error("Backend message:", error.response?.data?.message || "No specific error message");

       const errorMessage = error.response?.data?.message || "Something went wrong while updating the status.";
       throw new Error(errorMessage);
    }
}

export const deleteTaskService = async (id) =>{
    try {
        
        const response = await api.delete(`/tasks/${id}`)

        return response.data
        
    } catch (error) {
        console.error("Full error:", error);
       console.error("Backend message:", error.response?.data?.message || "No specific error message");

       const errorMessage = error.response?.data?.message || "Something went wrong while deleting the task.";
       throw new Error(errorMessage);
    }
}