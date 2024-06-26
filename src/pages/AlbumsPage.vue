<script setup lang="ts">
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { albums } = storeToRefs(appStore);
</script>

<template>
  <q-list>
    <q-item-label>Альбомы</q-item-label>
    <q-item v-for="album in albums" :key="album.name" clickable>
      <q-item-section>{{ album.name }}</q-item-section>
      <q-item-section>{{ album.year }}</q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>

</style>
