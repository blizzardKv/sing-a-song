import { routeNames } from 'src/router/route-names';

export const songsRoute = {
  path: '/albums/:id',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: routeNames.SONGS,
      component: () => import('pages/SongsPage.vue'),
    },
  ],
};
