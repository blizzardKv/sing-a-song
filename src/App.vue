<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { getLocalStorageItem, setLocalStorageItem } from 'src/helpers/local-storage-handlers';
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const STORAGE_KEY = 'musicLibrary';

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const saveDataToStorage = () => {
  setLocalStorageItem(STORAGE_KEY, JSON.stringify(musicLibrary.value));
};

const prepareData = () => getLocalStorageItem(STORAGE_KEY) || null;

onBeforeMount(() => {
  const localStorageData = prepareData();
  if (!localStorageData) return;

  musicLibrary.value = JSON.parse(localStorageData);
});

document.addEventListener('onbeforeunload', saveDataToStorage);
</script>
