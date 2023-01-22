import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import GamesPage from '../components/GamesPage.vue'
import PopularGames from '../components/Feauters/popularFolder/PopularGames.vue'
import NewGames from '../components/Feauters/newFolder/NewGames.vue'
import WaitingGames from '../components/Feauters/WaitingFolder/WaitingGames.vue'
import NewsPage from '../components/Feauters/newsPage/newsPage.vue'

const routes = [
  {
    path: '/property/:id',
    name: 'propertyPage',
    component: GamesPage,
  },
  {
    path: '/popular/:id',
    name: 'popularGames',
    component: PopularGames,
  },
  {
    path: '/new/:id',
    name: 'newGames',
    component: NewGames,
  },
  {
    path: '/waiting/:id',
    name: 'waitingGames',
    component: WaitingGames,
  },
  {
    path: '/news/:id',
    name: 'newsPage',
    component: NewsPage,
  },
  
  /* Main router */ 
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/galery/1',
    name: 'galery1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galery.vue')
  },
  {
    path: '/galery/2',
    name: 'galery2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galery/GaleryPage2.vue')
  },
  {
    path: '/galery/3',
    name: 'galery3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galery/GaleryPage3.vue')
  },
  {
    path: '/galery/4',
    name: 'galery4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galery/GaleryPage4.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },

  /* Feauters router */ 

  {
    id: 1,
    path: '/popular',
    name: 'popular',
    component: () => import(/* webpackChunkName: "about" */ '../components/Feauters/Popular.vue')
  },
  {
    id: 2,
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "about" */ '../components/Feauters/New.vue')
  },
  {
    id: 3,
    path: '/waiting',
    name: 'waiting',
    component: () => import(/* webpackChunkName: "about" */ '../components/Feauters/Waiting.vue')
  },
  {
    id: 4,
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../components/Feauters/News.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // всегда прокручиваем вверх
    return { top: 0 }
  },
  
})


export default router 

