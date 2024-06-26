<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from 'stores/app';
import { storeToRefs } from 'pinia';
import AddSong from 'components/common/AddSong.vue';

const appStore = useAppStore();
const { musicLibrary } = storeToRefs(appStore);

const isAddSongFormVisible = ref(false);

const onAddSongButtonClick = () => {
  isAddSongFormVisible.value = true;
};

const onModalClose = () => {
  isAddSongFormVisible.value = false;
};
</script>

<template>
  <q-list>
    <q-item-label>Песни</q-item-label>
    <q-item v-for="{ id, name } in musicLibrary.songs" :key="id">
      <q-item-section>{{ name }}</q-item-section>
    </q-item>
  </q-list>
  <q-btn @click="onAddSongButtonClick">Добавить песню</q-btn>
  <add-song v-if="isAddSongFormVisible" @close-modal="onModalClose" />
</template>

<style scoped>

</style>
