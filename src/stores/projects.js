import { defineStore } from "pinia";
import { getAllProjects } from "@/services/projects.service";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        name: "First Task",
        description: "This is the first task. ",
        completed: false,
      },
      {
        name: "Second Task",
        description: " This is the second task. ",
        completed: false,
      },
    ],
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
        const data = await getAllProjects();
        state.projects = data.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    },
  },
});
