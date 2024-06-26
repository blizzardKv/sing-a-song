import { RouteRecordRaw } from 'vue-router';
import { rootRoute } from 'src/router/modules/root';
import { singersRoute } from 'src/router/modules/singers';
import { songsRoute } from 'src/router/modules/songs';
import { albumsRoute } from 'src/router/modules/albums';

const routes: RouteRecordRaw[] = [
  rootRoute,
  singersRoute,
  songsRoute,
  albumsRoute,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
