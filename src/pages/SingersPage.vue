<script setup lang="ts">
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { artists } = storeToRefs(appStore);
</script>

<template>
  <q-list>
    <q-item-label>Исполнители</q-item-label>
    <q-item
      v-for="artist in artists"
      :key="artist"
      clickable
    >
      <q-item-section>{{ artist }}</q-item-section>
    </q-item>
  </q-list>
</template>
