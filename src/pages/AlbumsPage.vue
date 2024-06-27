<script setup lang="ts">
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);
</script>

<template>
  <q-list>
    <q-item-label>Альбомы</q-item-label>
    <q-item
      v-for="{ name, id, year } in musicLibrary.albums"
      :key="id"
      :to="`/albums/${id}`"
      clickable
    >
      <q-item-section>{{ name }}</q-item-section>
      <q-item-section>{{ year }}</q-item-section>
    </q-item>
  </q-list>
</template>
