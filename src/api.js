import axios from "axios";

const API_BASE_URL = "https://developers.sonichoiceservices.com/api/v1"; // Ensure this is correct

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData); 
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Something went wrong" };
  }
};

export const loginUser = async (credentials) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/login`, credentials)
        return response.data
    }catch(error){
        throw error.response?.data || { error: "Something went wrong" };
    }
}
