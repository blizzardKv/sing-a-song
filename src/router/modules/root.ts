import { routeNames } from 'src/router/route-names';

export const rootRoute = {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '/',
      name: routeNames.HOME,
      redirect: { name: routeNames.SINGERS },
      component: () => import('pages/HomePage.vue'),
    },
  ],
};
