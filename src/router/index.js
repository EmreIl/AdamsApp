import { createRouter, createWebHistory } from '@ionic/vue-router';



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    redirect: '/dashboard',
    name: "testm",
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/plan',
        name: 'Plan',
        component: () => import('@/views/Plan.vue'),
      },
      {
        path: '/appointments',
        name: 'Termine',
        component: () => import('@/views/Appointments.vue'),
      },
      {
        path: '/homework',
        name: 'Hausaufgaben',
        component: () => import('@/views/Homework.vue'),
      },
      {
        path: '/settings',
        name: 'Einstellungen',
        component: () => import('@/views/Settings.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
}) */

export default router