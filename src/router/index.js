import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LeaderManager from '../views/LeaderManager'
import Center from '../views/Center'
import DangjianServer from '../views/DangjianServer'
import DangjianDetail from '../views/DangjianDetail'
import HurreyBusiness from '../views/HurreyBusiness'
import Investment from '../views/Investment'
import InvestmentDetail from '../views/InvestmentDetail'
import Policy from '../views/Policy'
import PolicyDetail from '../views/PolicyDetail'
import Talk from '../views/Talk'
import Bridge from '../views/Bridge'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/leadermanager',
    component: LeaderManager
  },
  
  {
    path: '/center',
    component: Center
  },
  {
    path: '/dangjian',
    component: DangjianServer
  },
  {
    path: '/dangjiandetail/:id',
    component: DangjianDetail
  },
  {
    path: '/policy',
    component: Policy
  },
  {
    path: '/policydetail/:id',
    component: PolicyDetail
  },
  {
    path: '/hurreybusiness',
    component: HurreyBusiness
  },
  {
    path: '/investmentinfo',
    component: Investment
  },
  {
    path: '/investmentinfodetail/:id',
    component: InvestmentDetail
  },
  {
    path: '/talk',
    component: Talk
  },
  {
    path: '/bridge',
    component: Bridge
  },
  {
    path: '*',
    redirect: '/home'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
