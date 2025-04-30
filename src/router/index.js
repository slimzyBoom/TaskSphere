import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import DashboardView from "../views/DashboardView.vue";
import AuthLayout from "../layout/AuthLayout.vue";
import ProjectsView from "../views/ProjectsView.vue";
import DetailsProjectView from "../views/DetailsProjectView.vue";
import NotificationView from "../views/NotificationView.vue";
import SettingsView from "../views/SettingsView.vue";
import CalendarView from "../views/CalendarView.vue";
import ProfileView from "../views/ProfileView.vue";
import CreateProjectView from "../views/CreateProjectView.vue";
import EditProfileView from "@/views/EditProfileView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPassword from "@/views/ResetPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { requiresGuest: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresGuest: true },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPasswordView,
      meta: { requiresGuest: true },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
      meta: { requiresGuest: true },
    },
    {
      path: "/app",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "/projects",
          name: "projects",
          component: ProjectsView,
        },
        {
          path: "/project-details",
          name: "project-details",
          component: DetailsProjectView,
        },
        {
          path: "/notifications",
          name: "notifications",
          component: NotificationView,
        },
        {
          path: "/settings",
          name: "settings",
          component: SettingsView,
        },
        {
          path: "/calendar",
          name: "calendar",
          component: CalendarView,
        },
        {
          path: "/profile",
          name: "profile",
          component: ProfileView,
        },
        {
          path: "/update-profile",
          name: "update-profile",
          component: EditProfileView,
        },
        {
          path: "/create-project",
          name: "create-project",
          component: CreateProjectView,
        },
      ],
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  // If the user is authenticated and trying to access guest-only pages (e.g., login, register), redirect them to dashboard page
  if (isAuthenticated && to.meta.requiresGuest) {
    next({ name: "dashboard" });
  }
  // If the user is NOT authenticated and trying to access a protected page, redirect them to login
  else if (!isAuthenticated && to.meta.requiresAuth) {
    next({ name: "login" });
  }
  // Otherwise, allow the navigation
  else {
    next();
  }
});

export default router;
