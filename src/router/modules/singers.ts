import { routeNames } from 'src/router/route-names';

export const singersRoute = {
  path: '/singers',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: routeNames.SINGERS,
      component: () => import('pages/SingersPage.vue'),
    },
  ],
};
