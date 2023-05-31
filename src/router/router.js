
import { createRouter, createWebHistory } from 'vue-router';
import BenHome from '../views/BenHome';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BenHome,
    },
  ],
});

export default router;
