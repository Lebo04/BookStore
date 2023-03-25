import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import WelcomeComp from '../components/WelcomeComp.vue'
import AdminLog from '../components/AdminLog.vue'
import AdminSign from '../components/AdminSign.vue'


const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/BooksView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/admin',
    name: 'adminPage',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/single/:id',
    name: 'single',
    component: () => import('../views/SingleItemView.vue')
  },
  {
    path: '/forgot',
    component: ForgotPassword
  },
  {
    path: '/welcome',
    name: 'welcomeComp',
    component: WelcomeComp
  },
  {
    path: '/adminLog',
    name: 'adminLog',
    component: AdminLog
  },
  {
    path: '/adminSign',
    name: 'adminSign',
    component: AdminSign
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
