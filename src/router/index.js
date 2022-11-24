import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    name: 'layout',
    redirect:'help',
    component: () => import('@/views/layout'),
    children: [
      {
        path: 'help',
        name: 'help',
        component: () => import('@/views/help'),
      },
      {
        path: 'cprint',
        name: 'cprint',
        component: () => import('@/views/cprint'),
      },
      {
        path: 'locations',
        name: 'locations',
        component: () => import('@/views/locations'),
      },
      {
        path: 'printDocs',
        name: 'printDocs',
        component: () => import('@/views/printDocs'),
      },
      {
        path: 'scanDocs',
        name: 'scanDocs',
        component: () => import('@/views/scanDocs'),
      },
      {
        path: 'uses',
        name: 'uses',
        component: () => import('@/views/uses'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
