import { api } from "@/libs/api";

export const getUserDetails = async(email)=>{
    try {
        const formData = new FormData()

        formData.append('email',email)
        console.log(email);
        

        const response = await api.post(`/users/check-email`,formData)

        return response.data
        
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}


export const getUser = async(userId)=>{
    try {
        const response = await api.get(`/users/${userId}`)

        return response.data
        
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}