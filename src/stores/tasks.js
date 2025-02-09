import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", completed: true },
      { id: 2, title: "Task 2", completed: false },
      { id: 3, title: "Task 3", completed: true },
      { id: 4, title: "Task 4", completed: true },
    ],
  }),
  getters: {
    totalTasks: (state) => state.tasks.length,
    completedTasks: (state) => state.tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0),
    uncompletedTasks: (state) => state.tasks.reduce((count, task) => count + (task.completed === false ? 1 : 0), 0)
  },
});
