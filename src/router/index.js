import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DashboardView from '../views/DashboardView.vue'
import AuthLayout from '../layout/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,

    },
    
    {
      path: '/app',
      component: AuthLayout,
      children : [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
      ],
      meta: { requiresAuth: true },
    }
  ],
})

router.beforeEach((to, from, next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('authToken');
    if (!token) {
      next({name: 'login'});
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
