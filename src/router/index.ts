import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
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
    path: '/deposit',
    name: 'deposit',
    component: () => import(/* webpackChunkName: "expenses" */ '../views/DepositView.vue')
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: () => import(/* webpackChunkName: "expenses" */ '../views/PurchaseView.vue')
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

const isLoggedIn = () => {
  return localStorage.getItem('token')
}

const protectedRoutes = [
  "balance",
  "expenses",
  "checks_status",
  "incomes",
  "checks"
]
router.beforeEach((to, from, next) => {
  const name: any = to.name;
  const isProtected = protectedRoutes.includes(name);
  if(isProtected && !isLoggedIn()){
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }else next()
})

export default router
