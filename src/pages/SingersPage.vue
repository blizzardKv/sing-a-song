<script setup lang="ts">
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const getSrc = (key: number) => `https://i.pravatar.cc/150?${key}`;
</script>

<template>
  <q-list>
    <q-item-label>Исполнители</q-item-label>
    <q-item
      v-for="({ id, name }, key) in musicLibrary.artists"
      :key="id"
      clickable
    >
      <q-item-section avatar>
        <q-img :src="getSrc(key)" />
      </q-item-section>
      <q-item-section>{{ name }}</q-item-section>
    </q-item>
  </q-list>
</template>
