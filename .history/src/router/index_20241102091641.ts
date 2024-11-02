import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import CocktailDetail from '../components/CocktailDetail.vue';
import NotFound from '../views/NotFound.vue';

const cocktailCodes: string[] = ['margarita', 'mojito', 'a1', 'kir'];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:cocktailCode',
    component: CocktailDetail,
    props: true,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const cocktailCode = to.params.cocktailCode as string;
      if (cocktailCodes.includes(cocktailCode)) {
        next();
      } else {
        next({ name: 'NotFound' });
      }
    },
  },
  {
    path: '/',
    redirect: '/margarita',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
