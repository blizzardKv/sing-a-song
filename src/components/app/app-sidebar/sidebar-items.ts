import { SidebarItem } from 'components/app/app-sidebar/models';
import { routeNames } from 'src/router/route-names';

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Singers',
    icon: 'person',
    route: { name: routeNames.SINGERS },
  }, {
    title: 'Albums',
    icon: 'album',
    route: { name: routeNames.ALBUMS },
  }, {
    title: 'Songs',
    icon: 'lyrics',
    route: { name: routeNames.SONGS },
  },
];
