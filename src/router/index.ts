import { createRouter, createWebHashHistory } from 'vue-router'

import HomeMenu from '../components/HomeMenu/HomeMenu.vue';
import TreesPoster from '../components/TreesPoster/TreesPoster.vue';
import DownloadPoster from '../components/DownloadPoster/DownloadPoster.vue';

const routes = [
  { path: "/", component: HomeMenu },
  { path: '/trees', name: 'Trees', component: TreesPoster },
  { path: '/download', name: 'Download', component: DownloadPoster },
]

const router = createRouter({
  history: createWebHashHistory(), // 🔹 use hash mode
  routes,
})

export default router;
