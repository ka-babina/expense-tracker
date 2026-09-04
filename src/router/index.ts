import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import CalendarView from '../views/CalendarView.vue'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsView,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
