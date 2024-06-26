import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    artists: ['Artist 1', 'Artist 2', 'Artist 3'],
    albums: [
      { name: 'Album1', artist: 'Artist 1', year: 2020 },
      { name: 'Album2', artist: 'Artist 1', year: 2021 },
      { name: 'Album3', artist: 'Artist 2', year: 2020 },
    ],
    songs: [
      { name: 'Song 1', number: 1 },
      { name: 'Song 2', number: 2 },
      { name: 'Song 3', number: 1 },
    ],
  }),
});
