import api from "@/libs/api";


export  const addCollaborator = async(project_id, userId)=>{
    try {
        const response = await api.post(`/projects/${project_id}/collaborators/${userId}`)

        console.log(response);
        return response.data
        
    } catch (error) {
        // Log the full error for debugging
        console.error("Full error:", error);

        // Log specific parts if available
        console.error("Backend message:", error.response?.data?.message || "No specific error message");
    
        // Now throw a clean error
        const errorMessage = error.response?.data?.message || "Something went wrong while adding collaborator.";
        throw new Error(errorMessage);
    }
}

export  const deleteCollaborator = async(project_id, userId)=>{
    try {
        const response = await api.delete(`/projects/${project_id}/collaborators/${userId}`)

        console.log(response);
        return response.data
        
    } catch (error) {
        // Log the full error for debugging
        console.error("Full error:", error);

        // Log specific parts if available
        console.error("Backend message:", error.response?.data?.message || "No specific error message");
    
        // Now throw a clean error
        const errorMessage = error.response?.data?.message || "Something went wrong while removing collaborator.";
        throw new Error(errorMessage);
    }
}