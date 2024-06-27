import { boot } from 'quasar/wrappers';
import { useAppStore } from 'stores/app';
import { LocalStorage } from 'quasar';

const STORAGE_KEY = 'musicLibrary';

export default boot(() => {
  const appStore = useAppStore();

  const localStorageData = LocalStorage.getItem(STORAGE_KEY) || null;

  if (localStorageData) {
    appStore.musicLibrary = JSON.parse(localStorageData as string);
  }

  window.addEventListener('beforeunload', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appStore.musicLibrary));
  });
});
