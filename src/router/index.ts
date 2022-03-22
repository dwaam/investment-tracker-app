import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/section/summary'
  },
  {
    path: '/section/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/section/summary'
      },
      {
        path: 'summary',
        component: () => import('@/views/Summary.vue')
      },
      {
        path: 'crypto',
        component: () => import('@/views/Crypto.vue')
      },
      {
        path: 'bank',
        component: () => import('@/views/Bank.vue')
      },
      {
        path: 'stock',
        component: () => import('@/views/Stock.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
