import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [
      {
        id: 1,
        title: "Invite for collaboration to a task",
        description:
          "You have been invited to collaborate on a new task, hop in to check it out",
        category: "invite",
      },
      {
        id: 2,
        title: "Sub task submission",
        description: "A collaborator submitted a sub task hop in to verify",
        category: "submission",
      },
      {
        id: 3,
        title: "Approaching a deadline",
        description:
          "There is an unfinished sub-task that the deadline is soon hop in to finish it up",
        category: "deadline",
      },
      {
        id: 4,
        title: "Meeting scheduled",
        description:
          "A new meeting has been scheduled on a task please check it out",
        category: "meeting",
      },
      {
        id: 5,
        title: "New Task Created",
        description: "New task added let's finish setting it up",
        category: "new",
      },
    ],
  }),
  getters: {
    getCategoryColor: () => (category) => {
      const colors = {
        invite: "bg-blue-500",
        submission: "bg-green-500",
        deadline: "bg-red-500",
        meeting: "bg-purple-500",
        new: "bg-yellow-500",
      };
      return colors[category] || "bg-gray-500"; // Default color
    },
  },
});
