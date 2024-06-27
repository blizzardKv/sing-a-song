<script setup lang="ts">
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const getSrc = (index: number) => `https://unsplash.it/640/425?image=${index};`;
</script>

<template>
  <q-list>
    <q-item-label>Альбомы</q-item-label>
    <q-item
      v-for="({ name, id, year }, index) in musicLibrary.albums"
      :key="id"
      :to="`/albums/${id}`"
      clickable
    >
      <q-item-section avatar>
        <q-img :src="getSrc(index)" />
      </q-item-section>
      <q-item-section>{{ name }}</q-item-section>
      <q-item-section>{{ year }}</q-item-section>
      <q-btn
        icon="arrow_right"
        dense
        outline
      />
      <q-tooltip>
        Перейти в список песен альбома <b>{{ name }}</b>
      </q-tooltip>
    </q-item>
  </q-list>
</template>
