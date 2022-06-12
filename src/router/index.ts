import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import(/* webpackChunkName: "balance" */ '../views/BalanceView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import(/* webpackChunkName: "expenses" */ '../views/ExpensesView.vue')
  },
  {
    path: '/incomes',
    name: 'incomes',
    component: () => import(/* webpackChunkName: "expenses" */ '../views/IncomesView.vue')
  },
  {
    path: '/checks',
    name: 'checks',
    component: () => import(/* webpackChunkName: "checks" */ '../views/ChecksView.vue')
  },
  {
    path: '/checks/:status',
    name: 'checks_status',
    component: () => import(/* webpackChunkName: "checks" */ '../views/ChecksView.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
