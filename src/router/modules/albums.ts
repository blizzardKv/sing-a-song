import { routeNames } from 'src/router/route-names';

export const albumsRoute = {
  path: '/albums',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: routeNames.ALBUMS,
      component: () => import('pages/AlbumsPage.vue'),
    },
  ],
};
