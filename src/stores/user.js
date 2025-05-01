import { defineStore } from "pinia";
import {
  registerUserService,
  loginUserService,
  getUserService,
  logoutUserService,
} from "../services/user.auth.service";

export const useUserStore = defineStore("users", {
  state: () => ({
    user: {},
    userId: localStorage.getItem("userId") || "",
    token: localStorage.getItem("token") || "",
  }),
  getters: {
    getUserId: (state) => state.userId,
    getToken: (state) => state.token,
  },
  actions: {
    async registerUser(credentials) {
      try {
        const data = await registerUserService(credentials);
        if (!data) return;
        this.user = data.data;
        this.token = data.token;
        this.isAuthenticated = true;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.data.id);
      } catch (error) {
        throw error;
      }
    },
    async loginUser(credentials) {
      try {
        const data = await loginUserService(credentials);
        if (!data) return;
        this.user = data.data;
        this.token = data.token;
        this.isAuthenticated = true;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.data.id);
      } catch (error) {
        throw error;
      }
    },
    async logoutUser() {
      try {
        const response = await logoutUserService();
        if (!response) return;
        this.user = null;
        this.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        this.isAuthenticated = false;
      } catch (error) {
        console.error(error.message);
      }
    },
    setUser(user) {
      this.user = user;
    },
    async getUser() {
      try {
        const data = await getUserService(this.getUserId);
        if (!data) return;
        this.user = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  persist: {
    strategies: [
      {
        storage: window.sessionStorage,
        key: "userStore",
        paths: ["token", "userId"],
      },
    ],
  },
});
