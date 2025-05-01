import { api } from "@/libs/api";

export const getDashboard = async () => {
  try {
    const response = await api.get("/dashboard");

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
