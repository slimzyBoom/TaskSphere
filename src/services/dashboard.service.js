import { api } from "@/libs/api";

export const getUpcomingProjects = async () => {
  try {
    const response = await api.get("/dashboard/upcoming-projects");

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getDeadlineProjects = async () => {
  try {
    const response = await api.get("/dashboard/deadline-projects");

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getChartData = async () => {
  try {
    const response = await api.get("/dashboard/weekly-completed-tasks");

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getTaskSummary = async () => {
  try {
    const response = await api.get("/dashboard/monthly-percentage-task-summary");

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};


export const getCompletedTask = async () => {
  try {
    const response = await api.get("/dashboard/completed-projects");

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

