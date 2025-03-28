import { defineStore } from "pinia";
import { getAllProjectsService } from "@/services/projects.service";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [],
  }),
  getters: {
    totalProjects: (state) => state.projects.length,
    completedProjects: (state) =>
      state.projects.reduce(
        (count, project) => count + (project.completed ? 1 : 0),
        0
      ),
    uncompletedProjects: (state) =>
      state.projects.reduce(
        (count, project) => count + (project.completed === false ? 1 : 0),
        0
      ),
    personalProjects: (state) => {
      return state.projects.filter(
        (project) => project.category === "personal"
      );
    },
    collaborativeProjects: (state) => {
      return state.projects.filter(
        (project) => project.category === "collaborative"
      );
    },
    projectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
  },
  actions: {
    getAllProjects: async () => {
      try {
        const data = await getAllProjectsService();
        state.projects = data.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    },
  },
});
