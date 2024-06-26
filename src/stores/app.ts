import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    musicLibrary: {
      artists: [
        {
          id: 1,
          name: 'Artist 1',
        },
        {
          id: 2,
          name: 'Artist 2',
        },
      ],
      albums: [
        {
          id: 1, name: 'Album 1', artistId: 1, year: 2020,
        },
        {
          id: 2, name: 'Album 2', artistId: 2, year: 2021,
        },
      ],
      songs: [
        {
          id: 1,
          name: 'Song 1',
          albums: [
            { albumId: 1, trackNumber: 1 },
          ],
        },
        {
          id: 2,
          name: 'Song 2',
          albums: [
            { albumId: 1, trackNumber: 2 },
            { albumId: 2, trackNumber: 1 },
          ],
        },
      ],
    },
  }),
});
