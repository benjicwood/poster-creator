import { createRouter, createWebHistory } from 'vue-router'

import HomeMenu from '../components/HomeMenu/HomeMenu.vue';

import TreesPoster from '../components/TreesPoster/TreesPoster.vue';
import DownloadPoster from '../components/DownloadPoster/DownloadPoster.vue';


const routes = [
  { path: "/", component: HomeMenu },
  { path: '/poster', name: 'Poster', component: TreesPoster },
  { path: '/download', name: 'About', component: DownloadPoster },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;